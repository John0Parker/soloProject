const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(
    cors({
        credentials: true,
        origin : 'http://localhost:5173'
    }),
    express.json(),
    express.urlencoded({extended: true}),
    cookieParser() 
    )

// import mongoose
    require('./config/mongoose');

    // import routes
    require('./routes/cardsRoutes')(app); 
    require('./routes/userRoutes')(app);


    app.listen(8000, () => console.log('listening on port 8000'));