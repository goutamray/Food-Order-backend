
import mongoose from "mongoose"

// create category schema 
const messageSchema = mongoose.Schema({
  name : {
    type: String,
    required : true,
    trim : true,
  },
  email : {
    type: String,
    required : true,
    trim : true,
  },
  phone : {
    type: String,
    trim : true,
    default : null,
  },
  message : {
      type : String,
      default : null,
    },
},
{
  timestamps : true,
})

//export default 
export default mongoose.model("Message", messageSchema);

