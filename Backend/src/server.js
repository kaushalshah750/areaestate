import express from 'express';
var app = express();
import properties from './config/properties';
import cors from 'cors';
import indexRoute from './Controller/index.routes'
import sequelize from './config/db';

import User from './models/user.model';
import Lead from './models/Lead.model';
import LeadHistory from './models/lead_history.model';
import Role from './models/Role.model';
import WorkingLocation from './models/WorkingLocation.model';

sequelize.sync({ force: false }) // `force: true` will drop existing tables
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use("/api", indexRoute);

// Start the server
app.listen(properties.PORT, () => {
    console.log(`Server is running on port ${properties.PORT}`);
});