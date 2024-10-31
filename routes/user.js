
import express from "express";
import {
  createUser,
  loginUser
} from "../controllers/userController.js";
import { userPhotoMulter } from "../utilis/multer.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/signUp", userPhotoMulter, createUser); 
router.post("/signIn", loginUser); 


// export default router 
 export default router 

