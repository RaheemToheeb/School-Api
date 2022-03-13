
const  cloudinary = require('./db/cloudinary')
const userSchema=require("./model")

const postUser= async (req,res)=>{
    try {
        const newUser=await userSchema.create({
            
            universityName:req.body.universityName,
            location:req.body.location,
            schoolImage:req.file.path,
            dateCreated:req.body.dateCreated,
        
        })
        res.status(201).json({status:"user created successfully",data:newUser})
    } catch (error) {
        res.status(400).json({status:"Bad request"})
    }
};

const getUser=async (req,res)=>{
    try {
        
        const allUser= await userSchema.find()
        res.status(200).json({Status:"Successful",data:allUser})
    } catch (error) {
        res.status(404).json({Status:"Cant get user"})
    }
}

const getoneUser=async (req,res)=>{
    try {
        id=req.params.id
        const oneUser= await userSchema.findById(id);
        res.status(200).json({Status:"Successful",data:oneUser})
    } catch (error) {
        res.status(404).json({Status:"Cant get user"})
    }
}

const updateOne=async (req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            res.status(404).json({status:"Fail",message:`You're passing the wrong ID:${id}`})
        }
        // Check the validity of the ID fisrt cos if you update using the wrong ID without validation, it automatically pass the properties of that ID such as name and other to the current update
        const update= await userSchema.findByIdAndUpdate(id,req.body,{new:true, runValidator:true});
        res.status(200).json({Status:"Successful",data:update})
    } catch (error) {
        res.status(404).json({Status:"Cant get user"})
    }
}


const deleteOne=async (req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            res.status(404).json({status:"Fail",message:`You're passing the wrong ID:${id}`})
        }
        // id=req.params.id
        const deleteUser= await userSchema.findByIdAndDelete(id);
        res.status(200).json({Status:"Successful",data:deleteUser})
    } catch (error) {
        res.status(404).json({Status:"Cant delete user"})
    }
}
// Creating using cloudinary
const createSchool = async (req,res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const blog = await userSchema.create({

            universityName:req.body.universityName,
            location:req.body.location,
            schoolImage:req.file.path,
            dateCreated:req.body.dateCreated,
            cloud_url:result.secure_url,
            cloud_id:result.public_id

        })
        res.status(201).json({status:"Successful",data:blog})
    } catch (error) {
        res.status(404).json({message:error})
    }
}


const deleteOneSchool=async (req,res)=>{
    try {
        
        
        // if(!id){
        //     res.status(404).json({status:"Fail",message:`You're passing the wrong ID:${id}`})
        // }
        const id = req.params.id
        const school = await userSchema.findByIdAndDelete(id)
        // id=req.params.id
        // await cloudinary.uploader.destroy(school.public_id)
        await cloudinary.uploader.destroy(school.cloud_id)
        
        await fs.unlinkSync(school.schoolImage)
        // await userSchema.findByIdAndRemove(id)
        res.status(204).json({status:"delete"})
    } catch (error) {
        res.status(404).json({Status:"Failed",message:error.message})
    }
}


 module.exports ={
     postUser,
    getUser, 
    getoneUser,
    updateOne,
    deleteOne,
    deleteOneSchool,
    createSchool,
}