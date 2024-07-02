const { pool, sql } = require('../dbConfig');

const getAllBooks = async () => {
  await poolConnect;
  const request = pool.request();
  const result = await request.query('SELECT * FROM Books');
  return result.recordset;
};

const updateBookAvailability = async (bookId, availability) => {
  await poolConnect;
  const request = pool.request();
  await request
    .input('bookId', sql.Int, bookId)
    .input('availability', sql.Char, availability)
    .query('UPDATE Books SET availability = @availability WHERE book_id = @bookId');
};

module.exports = {
  getAllBooks,
  updateBookAvailability
};
