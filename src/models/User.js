import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    unique: true,
    required: true
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  password:{
    type: String,
    required: true,
    minlength: 6
  },
  profileImage:{
    type: String,
    default: ""
  }
})

const User = mongoose.model('User',userSchema);
export default User