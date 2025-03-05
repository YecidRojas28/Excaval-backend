import morgan from 'morgan';
import colors from 'colors';
import express from 'express';
import { db } from './config/db';

async function connectDB(){
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.green.bold('Conexión a la base de datos establecida'));
    } catch (error) {
        console.log(colors.red.bold('Error al conectar a la base de datos'));
        console.log(error);
    }
}
connectDB();
const app = express();

app.use(morgan('dev'));
app.use(express.json());

export default app;