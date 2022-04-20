const multer = require('multer');
let upload = multer({dest: 'temp/'});

function upLoad(req,res,next) {
    upload.single('fileToUpload');
    next();
}

module.exports = upLoad;