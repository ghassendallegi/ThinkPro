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
            type: Number // Durée en heures
        },
        organizer_id: {
            type: Number
        },
        latitude: {
                type: Number
            },
        longitude: {
                type: Number
            },
       
        prix_event: {
            type: Number
        },
        nombre_de_places: {
            type: Number
        }
    },
    {
        timestamps: true // Ajouter automatiquement createdAt et updatedAt
    }
);

export default model("Event", eventSchema);
