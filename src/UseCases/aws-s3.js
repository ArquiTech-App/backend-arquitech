const S3 = require('aws-sdk/clients/s3');

const fs = require('fs');
require('dotenv').config()


const region = 'us-west-1';
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;



const storage = new S3({
    region,
    accessKeyId,
    secretAccessKey,
    Bucket: 'userFolder'
})

function createFolder(name){
    return storage.putObject({
        Bucket: 'arquitec',
        ACL: "public-read",
        Key: `${name}/`
    }).promise()
}


function getBucket(){
    return storage.listBuckets().promise();
}
function uploadToBucket(file, name){
    
    const stream = fs.createReadStream(file.path);
    
    const params = {
        Bucket:'arquitech',
        Key:`${name}/${file.originalname}`,
        ACL: "public-read",
        Body: stream
    }
    
    
    return storage.upload(params).promise();
    
     
}

function getUrl(file, name){
    const params = {
        Bucket:'arquitech',
        Key:`${name}/${file.originalname}`,
    }
    
    return storage.getSignedUrl('getObject', params)
}

module.exports = {
    uploadToBucket,
    getBucket,
    createFolder,
    getUrl
}