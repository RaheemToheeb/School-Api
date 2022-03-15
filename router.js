const express = require ("express")
const router= express.Router()
const mongoose= require ("mongoose")
const {postUser,getUser,getoneUser,updateOne,deleteOne,createSchool,deleteMany,deleteOneSchool}=require ("./handler")
const imageUploader=require("./multer")

// router.post("/post", imageUploader, postUser)
router.post("/post",imageUploader, postUser)
router.post("/blog",imageUploader,createSchool)
router.get("/get", getUser)
router.get("/get/:id", getoneUser)
router.patch("/update/:id", updateOne)
// router.delete("/delete/:id", deleteOne)
router.delete("/deleteschool/:id", deleteOneSchool)
router.delete("/deleteAll", deleteMany)


module.exports=router