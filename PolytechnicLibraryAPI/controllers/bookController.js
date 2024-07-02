const { pool } = require('../dbConfig');

async function getBooks(req, res) {
  try {
    const request = pool.request();

    const result = await request.query('SELECT * FROM Books');

    res.status(200).json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateAvailability(req, res) {
  const { bookId } = req.params;
  const { availability } = req.body;

  try {
    const request = pool.request();

    await request
      .input('bookId', sql.Int, bookId)
      .input('availability', sql.Char, availability)
      .query('UPDATE Books SET availability = @availability WHERE book_id = @bookId');

    res.status(200).json({ message: 'Book availability updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { getBooks, updateAvailability };

