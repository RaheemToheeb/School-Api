require ('dotenv').config();
const mongoose=require('mongoose')
// const url = "mongodb://localhost/University"
url = process.env.LOCAL_DB
// const url = process.env.CLOUD_ATLAS
mongoose.connect (url).then(()=>{
try {
    console.log("I am connected now")
} catch (error) {
    console.log("unable to connect to data base")
}
})
module.exports = mongoose;