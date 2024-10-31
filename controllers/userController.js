
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import { 
        fileDeleteFromCloud, 
        fileUploadToCloud } from "../utilis/cloudinary.js";
import { findPublicId } from "../helpers/helpers.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; 


/**
 * @DESC  CREATE USER
 * @METHOD POST
 * @ROUTE /api/v1/user/signUp
 * @ACCESS PUBLIC 
 * 
 */
export const createUser = asyncHandler(async(req, res) => {
  const { name, email, password } = req.body;

  // validation 
  if (!email || !password) {
    return res.status(200).json({ message : "All fields are Required"}); 
  }

  try {
    const exisitUser = await User.findOne({ email });

    // check exist user
    if (exisitUser) {
      return res.status(400).json({ message : "Email Already Exists"}); 
    }

    // Handle file upload
    let filedata = null;
    if (req.file) {
        try {
            const data = await fileUploadToCloud(req.file.path);
            filedata = data.secure_url;
        } catch (error) {
            return res.status(500).json({ message: "Error uploading file" });
        }
    }

    // hash password 
    const hassPassword = await bcrypt.hash(password, 10); 

    // create user 
    const result = await User.create({
      name, 
      email, 
      password : hassPassword,
      photo : filedata,
    });

    // create token 
    const token = jwt.sign({ email : result.email, id: result._id}, process.env.JSON_WEB_TOKEN_SECRET_KEY);


    // response 
    return res.status(201).json({ 
      user : result, 
      token,  
      message: "User Created Successfull" });
  } catch (error) {
    console.log(error.message);
  }

})


/**
 * @DESC  LOGIN USER
 * @METHOD POST
 * @ROUTE /api/v1/user/signIn
 * @ACCESS PUBLIC 
 * 
 */
export const loginUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body;

  // validation 
  if (!email || !password) {
    return res.status(200).json({ message : "All fields are Required"}); 
  }

  try {
    const exisitUser = await User.findOne({ email });

    // check exist user
    if (!exisitUser) {
      return res.status(400).json({ message : "Email User Not Found"}); 
    }

    const matchPassword = await bcrypt.compare(password, exisitUser.password);
    
    // check password 
   if (!matchPassword) {
      return res.status(400).json({ message : "Password Not Match"}); 
   }


   // create token 
   const token = jwt.sign(
    { email : exisitUser.email, id : exisitUser._id},
     process.env.JSON_WEB_TOKEN_SECRET_KEY
    )

    // user login
    return res.status(200).json({ 
      user : {
        name : exisitUser?.name,
        email : exisitUser?.email,
        photo : exisitUser?.photo,
      }, 
      token,  
      message: "User Login Successfull" });

  } catch (error) {
    console.log(error.message); 
  }
})


