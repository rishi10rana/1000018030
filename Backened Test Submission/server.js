
import { log } from 'console';
import express from 'express';
import urlRouter from './Routes/Url.js';
import bodyParser from 'body-parser';

// express server
const app = express();
const port = 3000;

// middleware to parse the json post request we got
app.use(bodyParser.json());

//  Routes 
app.use('', urlRouter);


app.listen(port, () => {
    console.log(`Server has started listening on the Port: ${port}`);
});