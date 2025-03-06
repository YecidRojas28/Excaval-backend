import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config()

export const db = new Sequelize({
    models:[__dirname + '/../models/**/*'],
    dialect: 'sqlite',
    database: 'excaval',
    storage: './excaval.sqlite',
    logging: false,
})  