import EventCategory from '../models/eventCategory.js';

// Récupérer toutes les catégories d'événements
export async function getAllCategories(req, res) {
    try {
        const categories = await EventCategory.find({});
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération des catégories d'événements" });
    }
}

// Ajouter une nouvelle catégorie d'événements
export async function addCategory(req, res) {
    const category = new EventCategory({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newCategory = await category.save();
        res.status(201).json({
            message: "Catégorie d'événements créée avec succès !",
            category: newCategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la création de la catégorie d'événements" });
    }
}

// Récupérer une catégorie d'événements spécifique par ID
export async function getCategory(req, res) {
    try {
        const category = await EventCategory.findById(req.params.categoryId);
        if (!category) {
            return res.status(404).json({ message: "Catégorie d'événements non trouvée" });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la recherche de la catégorie d'événements" });
    }
}

// Mettre à jour une catégorie d'événements spécifique par ID
export async function updateCategory(req, res) {
    try {
        const updatedCategory = await EventCategory.findByIdAndUpdate(req.params.categoryId, req.body, { new: true, runValidators: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Catégorie d'événements non trouvée" });
        }
        res.status(200).json({
            message: "Catégorie d'événements mise à jour avec succès !",
            category: updatedCategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de la catégorie d'événements" });
    }
}

// Supprimer une catégorie d'événements spécifique par ID
export async function deleteCategory(req, res) {
    try {
        const deletedCategory = await EventCategory.findByIdAndDelete(req.params.categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Catégorie d'événements non trouvée" });
        }
        res.status(200).json({
            message: "Catégorie d'événements supprimée avec succès !",
            category: deletedCategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression de la catégorie d'événements" });
    }
}
