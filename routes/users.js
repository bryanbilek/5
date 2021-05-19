import express from 'express';

const router = express.Router();

//get request to /users endpoint
router.get('/', (req, res) => {
    res.send('Woohoo')
});

export default router;