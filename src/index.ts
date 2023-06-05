import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello World');
})

app.listen(3000, () => {
    console.log('server ready at localhost:3000');
})