const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

// Parse request body 
app.use(express.json({ extended: false }));

require('./routes/users')(app);

app.listen(PORT, () => {
console.log(`Server running on port: ${PORT}`)
})