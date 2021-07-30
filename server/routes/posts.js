import express from 'express';

import { getPosts } from '../controllers/posts'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Success(^_^)')
});

export default router;
