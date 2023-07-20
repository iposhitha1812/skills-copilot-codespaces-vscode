// Create web server

// 1. Load modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 2. Set middlewares
app.use(bodyParser.urlencoded({extended: false}));

// 3. Set routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/public/new.html');
});

app.post('/create', (req, res) => {
    let comment = req.body.comment;
    console.log(comment);
    res.send('Comment is ' + comment);
});

// 4. Start server
app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});