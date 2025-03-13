import express from 'express';

const app = express();


app.get('/birthday', (req, res) => {
    res.status(200).send('<h1>My Birthday is on 15th Augost</h1>');
});

app.listen(80, () => {
    console.log('Server is running on port 80');
    console.log('http://localhost:80/birthday');
});