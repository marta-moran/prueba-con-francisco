const mysql = require('mysql2')

const mysqlConfig = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root2323$',
  database: 'test'
});

mysqlConfig.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL!');
});


module.exports = { mysqlConfig }