import mongoose from "mongoose"

// create category schema 
const categorySchema = mongoose.Schema({
  title : {
    type: String,
    trim : true,
  },
  description : {
    type: String,
    trim : true,
  },
  category : {
    type: String,
    trim : true,
  },
 regularPrice : {
   type : Number,
   default : 0
 },
 salePrice : {
   type : Number,
   default : 0
 },
 rating : {
   type : Number,
   default : 0
 },
  photo :[
    {
      type : String,
      trim : true,
      default : null,
    },
  ]
},
{
  timestamps : true,
})

//export default 
export default mongoose.model("Category", categorySchema);