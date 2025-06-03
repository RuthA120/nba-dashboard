const express = require('express');
const cors = require('cors');
require('dotenv').config(); // loads your .env values

const app = express();

app.use(cors()); // allows frontend to talk to backend
app.use(express.json()); // allows backend to read JSON sent from frontend

// Add routes
app.use('/api/users', require('./routes/users'));
app.use('/api/players', require('./routes/players'));
app.use('/api/teams', require('./routes/teams'));
app.use('/api/mvp', require('./routes/mvp'));
app.use('/api/similarity', require('./routes/similarity'));
app.use('/api/groups', require('./routes/groups'));
app.use('/api/favorites', require('./routes/favorites'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
