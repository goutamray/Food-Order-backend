
import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessage,
  getSingleMessage,

} from "../controllers/messageController.js";



// init router from express  
const router = express.Router(); 

// routes 
router.post("/create",  createMessage); 
router.get("/", getAllMessage);        
router.get("/:id", getSingleMessage);  
router.delete("/:id", deleteMessage);


// export default router 
export default router;


