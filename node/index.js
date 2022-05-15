const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const isJson = require('./checkJson');

const PATH_TO_DATA = path.resolve('./data.json');

const app = express();
app.use(cors());

app.get('/data', (req, res) => {
    fs.promises.readFile(PATH_TO_DATA, 'utf8')
        .then(response => res.send(response));
});
app.post('/data', (req, res) => {
    if(isJson(req.body)) {
        fs.promises.writeFile(PATH_TO_DATA, req.body)
            .then(() => {
                res.send('everything is okay data already written');
            });
    } else {
        res.send('you have to send JSON');
    }
});

app.listen(5000, () => {
    console.log('sever runing on 5000 PORT');
});
