import { Sequelize } from 'sequelize';

// Create a new Sequelize instance
const sequelize = new Sequelize('areaestate', 'root', 'Kaushal$#@#123', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false // Disable logging
});

// Test Database Connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully!');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
})();

export default sequelize;

// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'MSI', //MSI\KAUSHAL
//     password: '',
//     database: 'UrbanCabs'
// }).promise()


