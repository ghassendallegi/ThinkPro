import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: true // Le nom de l'événement est obligatoire
        },
        description: {
            type: String
        },
        date: {
            type: Date
        },
        duration: {
            type: String
        },
        organizer: {
            type: String
        },
        location: {
            type: String
        }
    },
    {
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
);

export default model("Event", eventSchema);
