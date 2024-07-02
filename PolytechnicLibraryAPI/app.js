const express = require('express');
const bodyParser = require('body-parser');
const { register, login } = require('./controllers/authController');
const { getBooks, updateAvailability } = require('./controllers/bookController');
const { authenticateJWT, authorizeRole } = require('./middleware/authMiddleware');

const app = express();

app.use(bodyParser.json());

app.post('/api/register', register);
app.post('/api/login', login);
app.get('/api/books', authenticateJWT, getBooks);
app.put('/api/books/:bookId/availability', [authenticateJWT, authorizeRole('librarian')], updateAvailability);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
