import mongoose from 'mongoose';

import User from './user';
import Person from './person';

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
};

const models = { User, Person };

export { connectDb };

export default models;
