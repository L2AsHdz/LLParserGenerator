import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import routes from './routes/index';
const server = express();


//Configure port
server.set('port', process.env.PORT || 8080);

//Configure Express to use EJS
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

//Middlewares
server.use((reequest: Request, response: Response, next: NextFunction) => {
    console.log(`${reequest.url} - ${reequest.method}`);
    next();
});

//routes
server.use(routes);

//start server
server.listen(server.get('port'), () => {
    console.log('Server on port ', server.get('port'));
});