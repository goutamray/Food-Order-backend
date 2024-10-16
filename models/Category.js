
import mongoose from "mongoose"

// create category schema 
const categorySchema = mongoose.Schema({
  name : {
    type: String,
    trim : true,
  },
  photo : {
    type : String,
    trim : true,
    default : null,
  },
},
{
  timestamps : true,
})

//export default 
export default mongoose.model("Category", categorySchema);
