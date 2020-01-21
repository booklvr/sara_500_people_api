import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    food: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    skill: {
        type: String,
        required: true,
    },
    dinner: {
        type: String,
        required: true,
    },
    extra: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Person = mongoose.model('Person', personSchema);

export default Person;
