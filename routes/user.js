
import express from "express";
import {
  createUser,
} from "../controllers/userController.js";
import { userPhotoMulter } from "../utilis/multer.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/signUp", userPhotoMulter, createUser); 


// export default router 
 export default router 

