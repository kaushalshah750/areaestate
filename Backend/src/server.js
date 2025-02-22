import express from 'express';
var app = express();
import properties from './config/properties';
import cors from 'cors';
import indexRoute from './Controller/index.routes'

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors())

app.use("/api", indexRoute);

// Start the server
app.listen(properties.PORT, () => {
    console.log(`Server is running on port ${properties.PORT}`);
});
