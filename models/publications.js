//create publications model
import mongoose from 'mongoose'; // Importer Mongoose
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose

const publicationSchema = new Schema(
    {
        title: {
            type: String,
              
        },
        content: {
            type: String,
             
        },
        attachment: {
            type: String,
             
        },
        userId: {
            type: String,
             
        },
        nbLikes: {
            type: Number,
             
        },
        Comments: {
            type: Object,
        }
    },
    {
        timestamps: true 
    }
)
export default model("Publication", publicationSchema);
