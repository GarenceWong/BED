const { pool, sql } = require('../dbConfig');

const getUserByUsername = async (username) => {
  await poolConnect;
  const request = pool.request();
  const result = await request
    .input('username', sql.VarChar, username)
    .query('SELECT * FROM Users WHERE username = @username');
  return result.recordset[0];
};

const createUser = async (username, passwordHash, role) => {
  await poolConnect;
  const request = pool.request();
  await request
    .input('username', sql.VarChar, username)
    .input('passwordHash', sql.VarChar, passwordHash)
    .input('role', sql.VarChar, role)
    .query('INSERT INTO Users (username, passwordHash, role) VALUES (@username, @passwordHash, @role)');
};

module.exports = {
  getUserByUsername,
  createUser
};
