const multer = require("multer")
const path = require("path")

/* 
http://expressjs.com/en/resources/middleware/multer.html
Storage requires the following 
cloudinarya
1. Storage function(destination,fileName)
2. filterFile function (to selct which type of file format to accept)
3. fileUploader function (To uploadfile)*/


//diskstorage returns a StorageEngine implementation configured to store files on the local file system.
// destination is the path/directory created to hold file in the editor while the filename is the original file name on our local storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})



// for selcting file format
const filterFile = (req, file, cb) => {
    //extname and originalname Return the extension of the path, from the last '.' to end of string in
    const ext = path.extname(file.originalname);
    if(ext !== ".JPG" || ext !== "jpeg" || ext !== ".png" ) {
        cb(null, new Error("File format not supported"), false);

    } else {
        cb(null, true);
    }
}

// const limits ={fileSize: 1024 * 1024 * 20}

// //  For uploading image
// const imageUploader = multer({
//     storage: storage,
//     filterFile: filterFile,
//     limits: limits
// }).single("image");

//  For uploading image
const imageUploader = multer({
    storage: storage,
    filterFile: filterFile,
    limits: {
        fileSize: 1024 * 1024 * 20
    }
    // Name in .single() must be the name in Schema
}).single("schoolImage");

module.exports = imageUploader