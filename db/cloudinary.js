var cloudinary = require('cloudinary').v2;
require ('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.API_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
});

module.exports=cloudinary
