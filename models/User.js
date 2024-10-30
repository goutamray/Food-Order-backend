

import mongoose from "mongoose"

// create category schema 
const userSchema = mongoose.Schema({
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
  password : {
    type: String,
    trim : true,
    default : null,
  },
  photo : {
      type : String,
      default : null,
    },
},
{
  timestamps : true,
})

//export default 
export default mongoose.model("User", userSchema);