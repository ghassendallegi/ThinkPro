
import mongoose from 'mongoose'; // Importer Mongoose
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose

// Créez votre schéma qui décrit à quoi ressemblera chaque document
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
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
);


export default model("User", userSchema);

