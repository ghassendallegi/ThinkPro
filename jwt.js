import jwt from 'jsonwebtoken';

// Fonction pour générer un token JWT
export function generateToken(payload) {
    return jwt.sign(payload, 'secretKey', { expiresIn: '1h' });
}

// Fonction pour vérifier un token JWT
export function verifyToken(token) {
    return jwt.verify(token, 'secretKey');
}
