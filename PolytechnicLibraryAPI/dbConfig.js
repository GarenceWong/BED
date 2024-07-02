  const sql = require('mssql');

  const config = {
    user: 'booksapi-user',
    password: '123',
    server: 'localhost',
    database: 'LibraryAPI',
    options: {
      encrypt: true,
      trustServerCertificate: true,
      enableArithAbort: true
    }
  };
  
  const pool = new sql.ConnectionPool(config);
  const poolConnect = pool.connect();
  
  module.exports = {
    sql,
    poolConnect,
    pool
  };
  