import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Success(^_^)')
});

export default router;
