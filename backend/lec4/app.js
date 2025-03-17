import express from 'express';

const app = express();

app.listen(80, () => {
    console.log('Server is running on port 80');
    console.log('http://localhost:80/name');
    console.log('http://localhost:80/write/');
});


// GET POST PUT DELETE PATCH
// CRUD
// Create Read Update Delete
// POST GET PUT DELETE PATCH
// GET METHOD

app.get('/name', (req, res) => {
    res.status(200).send('<H1>KARBIN</H1>');
});

// create a post request
app.post('/write', (req, res) => {
    res.status(200).send('Hello World');
});

app.post('/write', (req, res) => {
    res.status(200).send(req.body);
    // const username = req.body.username;
    res.status(200).send('Hello ' + req.body);
});