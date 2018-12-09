import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from './src/routes/posts';
import usersRoutes from './src/routes/users';
require('./src/db/mongoose');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/users', usersRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
