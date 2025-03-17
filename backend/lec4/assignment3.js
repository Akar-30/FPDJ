import express from 'express';
import fs from 'fs/promises';


const app = express();
app.use(express.json());

app.post('/write', async (req, res) => {
    const { name } = req.body;
    await fs.writeFile('./data/name.txt', name);
    res.status(200).send('Successfully written to file');
});

app.delete('/delete', async (req, res) => {
    await fs.unlink('./data/name.txt');
    res.status(204).end('File deleted successfully');
});

app.get('/read', async (req, res) => {
    try {
        const data = await fs.readFile('./data/name.txt', 'utf-8');
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('File not found');
    }
}
);

app.patch('/update', async (req, res) => {
    const { name } = req.body;
    await fs.appendFile('./data/name.txt', name);
    res.status(200).send('Successfully added the name to the file');
}
);


app.listen(5050, () => {
    console.log('Server is running on port 5050');
    console.log('http://localhost:5050/delete');
    console.log('http://localhost:5050/read');
});