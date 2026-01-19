
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    
    email: {
        type : String,
        required : true, //not can be empty
        unique : true 
    },

    firstName : {
        type : String,
        required : true
    },

    lastName: {
        type : String,
        required : true
    },

    password: {
        type : String,
        required : true
    },

    isBlocked: {   
        type : Boolean,
        default : false
    },

    type: {
        type : String,
        default : 'customer',
    },

    profilePicture: {
        type : String,
        default : "user.png"
    }
});

const User = mongoose.model('Users', userSchema);

export default User;