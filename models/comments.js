//create comments model
import mongoose from 'mongoose'; // Importer Mongoose
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose
const commentSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        publicationId: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true 
    }
)
export default model("Comment", commentSchema);