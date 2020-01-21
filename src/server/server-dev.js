import path from 'path';
import 'dotenv/config';  // load environment variables from
import cors from 'cors';  // creates a cors header to prevent "Cross-Origin Request Blocked errors"
import express from 'express'; // creates express server



import webpack from 'webpack';
import webpackDevMilddleWare from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config.js';

import uuidv4 from 'uuid/v4'; // creates unique ideas uudiv4()


//import models and routes
import models, { connectDb } from '../js/models';
import routes from './routes';


const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config);

//MIDDLEWARE
// MIDDLEWARE COMES FIRST
app.use( async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('saradewaal') // pseuda authenticated user
    };
    next();
});

app.use(webpackDevMilddleWare(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));



app.use(express.json());    // body-parser - parses incoming request stream and makes it accessible on req.body and exposes it as json

//ROUTES
app.use('/session', routes.session);
app.use('/persons', routes.persons);
app.use('/users', routes.users);


// add cors header to every request by default
app.use(cors());

// HOMEPAGE TEST
app.get('/', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next (err);
        }
        res.set('content-type', 'text/html')
        res.send(result);
        res.end();
    });
});

const eraseDataBaseOnSync = true;
const PORT = process.env.PORT || 3000;

connectDb().then(async () => {
    if (eraseDataBaseOnSync) {
        await Promise.all([
            models.User.deleteMany({}),
            models.Person.deleteMany({})
        ])
        createPersons();
    }
    app.listen(process.env.PORT, () => {
        console.log(`Example app listenning on port ${process.env.PORT}!`);
    })
})

const createPersons = async () => {
    console.log('YOU ARE ADDING A USER AND PERSON');
    const sara = new models.User({
        username: 'saradewaal',
    })

    const person1 = new models.Person({
        name: 'nick',
        city: 'busan',
        country: 'korea',
        food: 'steak',
        job: 'robber',
        skill: 'hacker',
        dinner: 'Nietzsche',
    });

    await sara.save();
    await person1.save();
};

