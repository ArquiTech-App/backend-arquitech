const express = require('express');
const multer = require('multer');
let upload = multer({dest: 'temp/'});
const useCasesAutodesk = require('../UseCases/autodesk');

const router = express.Router();

router.get('/forge/oauth/public', (req, res) => {
    useCasesAutodesk.publicAuthorization(res)
})
router.post('/:name',upload.single('file'), async (req, res)=>{
    
    
        
        const nameBucket = req.params.name;
        const file = req.file.path;
        const originalname = req.file.originalname;
            
         message = await useCasesAutodesk.authorization(file, originalname, res)
        

       
})
module.exports = router;