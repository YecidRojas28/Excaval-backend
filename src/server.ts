import morgan from 'morgan';
import colors from 'colors';
import express from 'express';
import { db } from './config/db';
import permissions from './routes/permissions'
import roles from './routes/roles'
import users from './routes/users'
import workHours from './routes/workhours'
import salaries from './routes/salaries'

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

//Rutas

app.use('/permissions', permissions)
app.use('/roles', roles)
app.use('/users', users)
app.use('/workhours', workHours)
app.use('/salaries', salaries)

export default app;