const express = require('express');
require('dotenv').config();
const path = require('path'); 
const PORT = process.env.PORT || 5000;
const fileUpload = require('express-fileupload');
const app = express();


// Parse request body 
app.use(express.json({ extended: false }));

// Handling of file requests
app.use(fileUpload());

require('./routes/users')(app);

app.listen(PORT, () => {
console.log(`Server running on port: ${PORT}`)
})
