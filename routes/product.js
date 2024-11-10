
import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct
} from "../controllers/productController.js";



// init router from express  
const router = express.Router(); 

// routes 
router.post("/create",  createProduct); 
router.get("/", getAllProduct);        
router.get("/:id", getSingleProduct);  
router.delete("/:id", deleteProduct);
router.patch("/:id", categoryPhotoMulter, updateProduct); 


// export default router 
export default router;



