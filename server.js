const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

require('./routes/users')(app);

app.listen(PORT, () => {
console.log(`Server running on port: ${PORT}`)
})