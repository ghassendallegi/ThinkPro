const express = require('express');
const router = express.Router();

import { createPublication } from '../controllers/publications';

router.post('/', createPublication);