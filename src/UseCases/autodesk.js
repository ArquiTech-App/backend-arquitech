const querystring = require('querystring')
const Axios = require('axios')
const res = require('express/lib/response')
require('dotenv').config()

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const scopes = 'data:read data:write data:create bucket:create bucket:read viewables:read'
let access_token = ''
let urn = ''

async function authorization(file,originalname, response) {

  try {
    const res = await Axios({
      method: 'POST',
      url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: querystring.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: scopes
      })
    })

    access_token = res.data.access_token
    
    return uploadDocumentAutodesk(file,originalname, response);
  } catch (error) {
    console.log(error)
  }
}

async function publicAuthorization (response) {
  try {
    const res = await Axios({
      method: 'POST',
      url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: querystring.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'viewables:read'
      })

    })
    response.json({
      access_token: res.data.access_token,
      expires_in: res.data.expires_in
    })
  } catch (error) {
    console.log(error)
  }
}

async function createBucket (nameBucket, req) {
  
  const bucketKey = nameBucket
  const policyKey = 'persistent'

  try {
    const result = await Axios({
      method: 'POST',
      url: 'https://developer.api.autodesk.com/oss/v2/buckets',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${access_token}`

      },
      data: JSON.stringify({
        bucketKey,
        policyKey
      })

    })
    return uploadDocumentAutodesk(req)
  } catch (error) {
    if (error.result && error.result.status == 409) {
      console.log('Bucket already exist, skip creation.')
      return uploadDocumentAutodesk(req)
    }
    console.log(error)
  }
}

async function uploadDocumentAutodesk (file, originalname, response) {
 
  const fs = require('fs')
  fs.readFile(file, async (err, filecontent) => {
    try {
      const result = await Axios({
        method: 'PUT',
        url: `https://developer.api.autodesk.com/oss/v2/buckets/${encodeURIComponent('arquitech')}/objects/${encodeURIComponent(originalname)}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Accept-Encoding': 'gzip, deflate'

        },
        data: filecontent
      })
      urn = Buffer.from(result.data.objectId).toString('base64')
      response.json({
        success: true,
        message: 'success upload model 3d.',
        name: originalname,
        urn: urn
      })
    } catch (error) {
      console.log('Failed to create a new object in the bucket')
    }
  })
}

async function modelDerivative(urn) {
  try {
    const result = await Axios({
      method: 'POST',
      url: 'https://developer.api.autodesk.com/modelderivative/v2/designdata/job',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${access_token}`
      },
      data: JSON.stringify({
        input: {
          urn

        },
        output: {

          formats: [
            {
              type: 'svf',
              views: ['3d', '2d']
            }]
        }
      })
    })
    let json = await res.json()
    console.log(json);
    return json
  } catch (error) {
    console.log('Error at Model Derivative job.')
  }
}

module.exports = {
  authorization,
  publicAuthorization,
  createBucket,
  uploadDocumentAutodesk,
  modelDerivative
}
