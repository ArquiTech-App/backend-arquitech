const express = require('express');
const {uploadToBucket, getBucket, createFolder, getUrl} = require('../UseCases/aws-s3');
const multer = require('multer');
let upload = multer({dest: 'temp/', limits: {maxSize: 1048576}});
const router = express.Router();

router.post('/upload/:name',upload.single('file'), async (req, res) => {
    
    try {
        
        const file = req.file;
        const name = req.params.name;
        const uploadFile = await uploadToBucket(file, name)

        const url = await getUrl(file, name)
        
        
        res.json({
            success: true,
            message: 'Upload a file',
            url: url
        })
    } catch (error) {
        res.status(400)
        res.json({ 
            success: false,
            message: 'Error at upload a file',
            error: error.message
        })
    }

    
})

router.post('/createFolder', async (req, res) => {
    try {
        const name = req.body.name;
        
        const Folder = await createFolder(name);
        
        res.json({
            success: true,
            message: 'Create Bucket'
        })
    } catch (error) {
        res.status(400)
        res.json({ 
            success: false,
            message: 'Error to create a Bucket',
            error: error.message
        })
    }
})

module.exports = router;