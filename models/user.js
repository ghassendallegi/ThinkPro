
import mongoose from 'mongoose'; 
const { Schema, model } = mongoose; 

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        passWord: {
            type: String,
            required: true
          
        },
        email: {
            type: String,
            required: true
           
        },
          adress: {
            type: String,
            required: true
            
        },
          phone: {
            type: Number,
            required: true
           
        },
          role: {
            type: String,
            required: true
            
        }
    },
    {
        timestamps: true
    }
);


export default model("User", userSchema);

