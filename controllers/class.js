import User from '../models/user.js';
import Class from '../models/class.js';



export function getAllClass(req, res) {
    Class
    .find({})
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}
export async function addClass(req, res) {
    const classe = new Class({
        className: req.body.className,
        teacher: req.body.teacher,
        students: req.body.students,
        capacity: req.body.capacity,
        schedule: req.body.schedule
    });
         


    try {
        const newClass = await Class.create(classe);
        
        res.status(201).json({
            message: "Class created successfully!",
            class: newClass
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while creating the class" });
    }
}

export async function getClass(req, res) {
    try {
        const classe = await Class.findOne({ className: req.params.className });
        
        if (!classe) {
            return res.status(404).json({ message: "Class not found" });
        }
        
        res.status(200).json(classe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la recherche de la classe" });
    }
}

export async function updateClass(req, res) {
    try {

        


        const updatedClass = await Class.findOneAndUpdate(
            {  _id:req.params.classId}, 
            { className: req.body.className,teacher: req.body.teacher,students: req.body.students,capacity: req.body.capacity,schedule: req.body.schedule }, // Données à mettre à jour
            { new: true } 
        );

        if (!updatedClass) {
            return res.status(404).json({ message: "Classe non trouvé" });
        }

        res.status(201).json({
            message: "Classe mis à jour avec succès !",
            class: updatedClass
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de la classe" });
    }
}



export async function deleteClass(req, res) {
    try {
        const deletedClass = await Class.findOneAndDelete({ className: req.params.className });

        if (!deletedClass) {
            return res.status(404).json({ message: "Classe non trouvé" });
        }

        res.status(200).json({
            message: "Classe supprimé avec succès !",
            class: deletedClass
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression de la classe" });
    }
}