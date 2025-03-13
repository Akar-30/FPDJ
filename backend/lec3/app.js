import express from 'express';

const app = express();

app.get('/name', (req, res) => {
    res.status(200).send('<Button>Click Me</Button>');
});

app.listen(80, () => {
    console.log('Server is running on port 80');

});