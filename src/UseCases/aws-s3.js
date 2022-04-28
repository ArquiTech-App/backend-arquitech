const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');


const region = process.env.AWS_REGION;
const accesKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS;

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
function uploadToBucket(bucketName, file){
    const stream = fs.createReadStream(file.tempFilePath);
    const params = {
        Bucket: bucketName,
        Key: file.name,
        Body: stream
    }
    return storage.upload(params).promise();
}

module.exports = {
    uploadToBucket,
    getBucket
}