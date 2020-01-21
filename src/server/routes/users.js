import { Router } from 'express';

const router = Router();

// Get all peoples answers
router.get('/', (req, res) => {
    return res.send('these are the people');
});

export default router;


