import { Router } from 'express';

const router = Router();

// Get all peoples answers
router.get('/', async (req, res) => {
    const persons = await req.context.models.Person.find();

    return res.send(persons);
});

router.get('/:personId', async (req, res) => {
    const person = await req.context.models.Person.findById(req.params.personId);
    return res.send(person);
});

export default router;


