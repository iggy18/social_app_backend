import express from 'express';
import userRoutes from './routes/userRoutes';
import socailPost from './routes/socialPostRoutes';

const app = express();

app.use('/user', userRoutes);
app.use('/socialpost', socailPost);

app.get('/', (req, res) => {
    res.send('hello World');
});

app.listen(3000, () => {
    console.log('server ready at localhost:3000');
});