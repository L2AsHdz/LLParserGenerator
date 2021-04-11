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
server.use((request: Request, response: Response, next: NextFunction) => {
    console.log(`${request.url} - ${request.method}`);
    next();
});

//Routes
server.use(routes);

//Static files
server.use(express.static(path.join(__dirname, 'public')));

//Start server
server.listen(server.get('port'), () => {
    console.log('Server on port ', server.get('port'));
});