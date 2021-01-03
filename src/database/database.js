const Sequelize  = require("sequelize");
const sequelize = new Sequelize('', '', '', {
    host: '127.0.0.1',
    dialect: 'mssql',
    dialectOptions: {
    options: {
      
        encrypt: false,
        validateBulkLoadParameters: true,
    }
    }
    });
  
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err); // eslint-disable-line no-console
  });
  
  module.exports =  sequelize;