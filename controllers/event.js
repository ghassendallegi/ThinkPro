import Event from '../models/event.js';

export async function getAllEvents(req, res) {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération des événements" });
    }
}

export async function addEvent(req, res) {
    const event = new Event({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        duration: req.body.duration,
        organizer: req.body.organizer,
        location: req.body.location
    });

    try {
        const newEvent = await Event.create(event);
        res.status(201).json({
            message: "Événement créé avec succès !",
            event: newEvent 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la création de l'événement" });
    }
}

export async function getEvent(req, res) {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }
        res.status(200).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la recherche de l'événement" });
    }
}

export async function updateEvent(req, res) {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }
        res.status(200).json({
            message: "Événement mis à jour avec succès !",
            event: updatedEvent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'événement" });
    }
}

export async function deleteEvent(req, res) {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.eventId);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }
        res.status(200).json({
            message: "Événement supprimé avec succès !",
            event: deletedEvent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression de l'événement" });
    }
}
