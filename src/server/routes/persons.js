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

router.post('/', async (req, res) => {
    const person = await req.context.models.Person.create({
        name: req.body.name,
        city: req.body.city,
        country: req.body.country,
        food: req.body.food,
        job: req.body.job,
        skill: req.body.skill,
        dinner: req.body.dinner,
        etc: req.body.etc,
        user: req.context.me.id,
    });
    return res.send(person);
});

export default router;


