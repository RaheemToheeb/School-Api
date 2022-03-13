
// const express = require('express');
// const myRoute = require("./router")
// const port = 9999;
// const app = express()
// app.use(express.json())
// // These create route to get image or track where we have static files like jpg,mp3,mp4
// app.use("",express.static("./image"))
// app.use("/api",myRoute)
// require ("./db/config")

// app.listen(port,()=>{
//     console.log(`I am active on port ${port}`)
// })

const express = require("express");
const myRoute = require ("./router")
const port = 9495
require ("./db/config")
const app=express()
app.use(express.json())
app.use("/userImage",express.static("./image"))
app.use("/api",myRoute)
app.listen(port,()=>{
    console.log(`I am active on port ${port}`)
})