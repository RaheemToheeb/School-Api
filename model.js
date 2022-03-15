const mongoose=require("mongoose")

// userSchema=mongoose.Schema({
//     prefix:{
//         type:String,
//         required:true
//     },
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:[true,"This field is required"]
//     },

//     password:{
//         type:String,
//         required:true
//     },

//     image:{
//         type:String,
//         required:true
//     }
// })

// module.exports=mongoose.model("user",userSchema)
// const mongoose=require("mongoose");
// userSchema=mongoose.Schema({
//     prefix: {
//            type:String,

//            required:true},

//              firstName: {
//                 type:String,
//                 required:true
//                   },
//                   lastName: {
//                     type:String,
//                     required:true
//                       },
//                       email: {
//                         type:String,
//                         required:true
//                           },
//                           passWord: {
//                             type:String,
//                             required:true
//                               },

//                               image: {
//                                 type:String,
//                                 required:true
//                                   },

//                                   cloud_url: {
//                                     type:String,
//                                     required:true
//                                       },

//                                       cloud_: {
//                                         type:String,
//                                         required:true
//                                           },
// })

// module.exports=mongoose.model("user",userSchema)


userSchema=mongoose.Schema({ 
    universityName:{
        type: String,
        required:true
    },

    location:{
        type: String,
        required:true
    },

    schoolImage:{
        type: String,
        required:true
    },

    dateCreated:{
        type: String,
        required:true
    },
    cloud_url: {
        type:String,
        // required:true
         },

         Cloudid: {
            type:String,
            // required:true
             }
})

module.exports=mongoose.model("user",userSchema)