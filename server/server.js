const express = require('express');
const cors = require('cors');
const app = express();

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true}), 
    )

// import mongoose
    require('./config/mongoose');

    // import routes
    require('./routes/cardsRoutes')(app); 


    app.listen(8000, () => console.log('listening on port 8000'));