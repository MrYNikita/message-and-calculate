import { readFileSync, writeFileSync, } from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/calculate', (req, res) => {

    res.json(JSON.parse(readFileSync('./json/calculate.json', 'utf8')));

});
app.get('/message', (req, res) => {

    res.json(JSON.parse(readFileSync('./json/message.json', 'utf8')));

});
app.post('/calculate', (req, res) => {

    writeFileSync('./json/calculate.json', JSON.stringify(req.body));

    res.statusCode = 200;
    res.end();

});
app.post('/message', (req, res) => {

    const result = [...JSON.parse(readFileSync('./json/message.json', 'utf8')), req.body];

    writeFileSync('./json/message.json', JSON.stringify(result));

    res.statusCode = 200;
    res.end();

});

app.listen(8000);