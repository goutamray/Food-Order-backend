

import asyncHandler from "express-async-handler";
import Message from "../models/Message.js";


/**
 * @DESC  GET ALL MESSAGE
 * @METHOD GET
 * @ROUTE /api/v1/message
 * @ACCESS PUBLIC 
 * 
 */
export const getAllMessage = asyncHandler(async(req, res) => {
  // get all message 
  const messageList = await Message.find();

  // check message 
  if (!messageList) {
    return res.status(404).json({ messageList : "", message : "Message Not Found" });
  }

return res.status(200).json({ messageList,  message : "Get All Message"});
});


/**
 * @DESC GET SINGLE MESSAGE
 * @METHOD GET
 * @ROUTE /api/v1/category/:id 
 * @ACCESS PUBLIC 
 * 
 */
export const getSingleMessage = asyncHandler(async(req, res) => {
  // get params 
 const { id } = req.params;

 // find single category
 const singleMessage = await Message.findById(id); 

 if (!singleMessage) {
    return res.status(404).json({ message : "Message Data Not Found"});
 }

 // return single data 
 return res.status(200).json({ singleMessage , message : "Get Single Message"})
})



/**
 * @DESC CREATE MESSAGE
 * @METHOD POST
 * @ROUTE /api/v1/message/create
 * @ACCESS PUBLIC 
 * 
 */
export const createMessage = asyncHandler(async(req, res) => {
  // get form data 
  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message : "All fields are Required" })
  };


  // create message 
  const newMessage = await Message.create({ name, email, phone, message });

  // save data 
  return res.status(201).json({ newMessage,  message : "Message Created Successfull"})
});



/**
 * @DESC DELETE MESSAGE
 * @METHOD DETETE
 * @ROUTE /api/v1/message/:id 
 * @ACCESS PUBLIC 
 * 
 */
export const deleteMessage = asyncHandler(async(req, res) => {
  // get params 
  const { id } = req.params;

  // delete message data 
  const deleteMessage = await Message.findByIdAndDelete(id);

  // check message
  if (!deleteMessage) {
     return res.status(404).json({ message : "Message not found" })
  }


 return res.status(200).json({ deleteMessage,  message : "Message Deleted Successfull"})
})




