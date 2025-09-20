import express from 'express';
import { getURL } from '../Controller/url.js'

const router = express.Router();

// here we have API Endpoints
// @api-endpoint :- /shorturls
router.post('/shorturls', getURL);

export default router; 