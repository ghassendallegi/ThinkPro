import User from '../models/user.js';

const users=[];


export function getAll(req, res) {
    User
    .find({})
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}
export async function AddOnce(req, res) {
    const user = new User({
        userName: req.body.userName,
        passWord: req.body.passWord,
        email: req.body.email,
        adress: req.body.adress,
        phone: req.body.phone,
        role: req.body.role
    });

    try {
        const newUser = await User.create(user);
        
        res.status(201).json({
            message: "User created successfully!",
            user: newUser 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while creating the user" });
    }
}



export async function getOnce(req, res) {
    try {
        const user = await User.findOne({ userName: req.params.userName });
        
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la recherche de l'utilisateur" });
    }
}



export async function putOnce(req, res) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { userName: req.params.userName }, 
            { passWord: req.body.passWord, email: req.body.email, adress: req.body.adress , phone: req.body.phone, role: req.body.role }, // Données à mettre à jour
            { new: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({
            message: "Utilisateur mis à jour avec succès !",
            user: updatedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
}


export async function patchOnce(req, res) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { userName: req.params.userName }, 
             { $set: req.body },
            { new: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({
            message: "Utilisateur mis à jour avec succès !",
            user: updatedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
}


export async function deleteOnce(req, res) {
    try {
        const deletedUser = await User.findOneAndDelete({ userName: req.params.userName });

        if (!deletedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({
            message: "Utilisateur supprimé avec succès !",
            user: deletedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
    }
}
