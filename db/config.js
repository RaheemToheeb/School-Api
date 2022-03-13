
const mongoose=require('mongoose')
const url = "mongodb://localhost/University"
mongoose.connect (url).then(()=>{
try {
    console.log("I am connected now")
} catch (error) {
    console.log("unable to connect to data base")
}
})
module.exports = mongoose;