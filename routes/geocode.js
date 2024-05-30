import express from 'express';
const router = express.Router();
import {geocode}from '../controllers/geocode.js';

router.get('/geocode', geocode);

export default router;
