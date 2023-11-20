import routes from './routes.js';
import express from 'express';
import dotenv from 'dotenv'; 

const app = express();
dotenv.config();

app.use(routes);


app.listen(process.env.PORT, () => {
    console.log('Server started at http://localhost:3000');
})