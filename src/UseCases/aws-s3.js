const S3 = require('aws-sdk/clients/s3');

const fs = require('fs');
require('dotenv').config()


const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;



const storage = new S3({
    region,
    accessKeyId,
    secretAccessKey
})



function createBucket(bucketName){
    return storage.createBucket(bucketName).promise();
}
function getBucket(){
    return storage.listBuckets().promise();
}
function uploadToBucket(file){
    
    const stream = fs.createReadStream(file.path);
    
    const params = {
        Bucket:'prueba-deveckor',
        Key:file.originalname,
        ACL: "public-read",
        Body: stream
    }
    
    return storage.upload(params).promise();
}

module.exports = {
    uploadToBucket,
    getBucket,
    createBucket,
}