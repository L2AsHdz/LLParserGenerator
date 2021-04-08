import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
const server = express();
//import router from './routes/prueba';

//Settings
server.set('port', process.env.PORT || 8080);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

//Middlewares
server.use((reequest: Request, response: Response, next: NextFunction) => {
    console.log(`${reequest.url} - ${reequest.method}`);
    next();
});

server.get( "/", ( req, res ) => {
    res.render('index');
} );

//routes
//server.use(router);

//static files
server.use(express.static(path.join(__dirname, 'public')));

//start server
server.listen(server.get('port'), () => {
    console.log('Server on port ', server.get('port'));
});