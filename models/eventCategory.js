import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const eventCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true // Le nom de la catégorie doit être unique
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
);



export default model("EventCategory", eventCategorySchema);
