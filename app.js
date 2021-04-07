const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes/index');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use((req, resp, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
});

//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
