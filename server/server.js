const express = require('express');
const cors = require('cors');

const authRoute = require('./routes/auth');

const app = express();



app.use(cors());


// Allow express to read JSON sent in req.body
app.use(express.json());


// Authentication route
app.use('/api/auth', authRoute);



app.listen(3000, function () {
    console.log('Server running on http://localhost:3000');
});