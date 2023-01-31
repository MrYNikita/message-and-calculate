import { readFileSync, writeFileSync, } from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/calculate', (req, res) => {



});
app.get('/message', (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(readFileSync('./json/message.json', 'utf8')));

});
app.post('/calculate', (req, res) => {



});
app.post('/message', (req, res) => {



});

app.listen(8000);