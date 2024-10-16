
import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory
} from "../controllers/categoryController.js";
import { categoryPhotoMulter } from "../utilis/multer.js";


// init router from express  
const router = express.Router(); 

// routes 
router.post("/create", categoryPhotoMulter, createCategory); 
router.get("/", getAllCategory);        
router.get("/:id", getSingleCategory);  
router.delete("/:id", deleteCategory);
router.patch("/:id", categoryPhotoMulter, updateCategory); 


// export default router 
export default router;














