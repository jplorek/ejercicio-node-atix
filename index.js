const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listen to port ${process.env.PORT}`);
});


module.exports = app;