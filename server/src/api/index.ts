import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';

const router = express.Router();

router.get<{}>('/', (req, res) => {
  res.json({
    message: 'Qwtetet API - 👋🌎🌍🌏',
    email: 'iajjdj@yaho.com',
    name: 'Iajapa ',
    boooks: ['dgcdgceg', 'fhegfyegfye'],
  });
});

router.use('/emojis', emojis);

export default router;
