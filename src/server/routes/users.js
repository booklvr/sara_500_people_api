import { Router } from 'express';

const router = Router();

// Get all peoples answers
router.get('/', async (req, res) => {
    const users = await req.context.models.User.find();

    return res.send(users);
});

export default router;


