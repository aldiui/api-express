import { Sequelize } from 'sequelize';

const db = new Sequelize('aldiui', 'aldiui', '11221122', {
    host: 'db4free.net',
    dialect: 'mysql',
});

export default db;
