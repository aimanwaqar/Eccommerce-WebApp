import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';

const port = 8000;
const app = express();

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
});

DefaultData();