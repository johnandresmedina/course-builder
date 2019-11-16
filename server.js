const express = require('express');

const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/courses', require('./routes/api/courses'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
