
import mongoose from 'mongoose'; // Importer Mongoose
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose

// Créez votre schéma qui décrit à quoi ressemblera chaque document
const userSchema = new Schema(
    {
        userName: {
            type: String,
             // Cet attribut est obligatoire
        },
        passWord: {
            type: String,
          
        },
        email: {
            type: String,
           
        },
          adress: {
            type: String,
            
        },
          phone: {
            type: Number,
           
        },
          role: {
            type: String,
            
        }
    },
    {
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
);


export default model("User", userSchema);

