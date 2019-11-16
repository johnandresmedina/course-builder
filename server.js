const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (request, response) => response.send('API Running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
