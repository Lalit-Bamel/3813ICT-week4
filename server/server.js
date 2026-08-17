const express = require('express');
const cors = require('cors');

const authRoute = require('./routes/auth');

const app = express();


// Allow Angular localhost:4200 to communicate with Node localhost:3000
app.use(cors());


// Allow Express to read JSON sent in req.body
app.use(express.json());


// Authentication route
app.use('/api/auth', authRoute);


// Start server
app.listen(3000, function () {
    console.log('Server running on http://localhost:3000');
});