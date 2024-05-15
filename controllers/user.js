import User from '../models/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../jwt.js';

export async function signup(req, res) {
    try {
        const { userName,passWord,email,adress,phone,role } = req.body;
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "L'utilisateur existe déjà" });
        }
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(passWord, 10);
        // Créer un nouvel utilisateur
        const newUser = await User.create({ userName, passWord: hashedPassword ,email,adress,phone,role });
        res.status(201).json({ message: "Inscription réussie", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'inscription" });
    }
}

export async function signin(req, res) {
    try {
        const { email, passWord } = req.body;
        // Trouver l'utilisateur par email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "L'utilisateur n'existe pas" });
        }
        // Vérifier le mot de passe
        const passwordMatch = await bcrypt.compare(passWord, user.passWord);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }
        // Générer un token d'authentification (à implémenter)
        // Vous pouvez utiliser JWT ou toute autre méthode d'authentification
                const authToken = generateToken({ userId: user._id, email: user.email });
 // Générer le token ici
        res.status(200).json({ message: "Connexion réussie", authToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur s'est produite lors de la connexion" });
    }
}
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
        passWord: req.body.passWord = await bcrypt.hash(req.body.passWord, 10),
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

        if (req.body.passWord) {
            // Cryptage du nouveau mot de passe
            req.body.passWord = await bcrypt.hash(req.body.passWord, 10);
        }


        const updatedUser = await User.findOneAndUpdate(
            {  _id:req.params.userId}, 
            { userName: req.body.userName,passWord: req.body.passWord, email: req.body.email, adress: req.body.adress , phone: req.body.phone, role: req.body.role }, // Données à mettre à jour
            { new: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(201).json({
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

        if (req.body.passWord) {
            // Cryptage du nouveau mot de passe
            req.body.passWord = await bcrypt.hash(req.body.passWord, 10);
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.userId }, 
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
