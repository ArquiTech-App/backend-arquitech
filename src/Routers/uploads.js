const express = require('express');
const {uploadToBucket, getBucket, createBucket} = require('../UseCases/aws-s3');
const multer = require('multer');
let upload = multer({dest: 'temp/'});
const router = express.Router();

router.post('/upload',upload.single('file'), async (req, res) => {
    
    try {
        
        const file = req.file;
        
        
        const uploadFile = await uploadToBucket(file)

        res.json({
            success: true,
            message: 'Upload a file',
            
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

module.exports = router;