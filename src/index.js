import express from 'express';
import 'dotenv/config'
import cors from 'cors' ;
import morgan from 'morgan';
console.log ('hola mundo');

//creamos una instancia de express
const app = express();

//configuramos el puerto en el que se va
app.set('port',process.env.PORT||5050)
//inicializamos nuestro backend
app.listen(app.get('port'),()=> {
    console.log(`backend listening TO port ${app.get('port')}`);
}).on('error',(error)=>{
    console.log('ERROR',error);
    process.exit(1);
});
//middlewares
//1- middlewares nativos de express . permite recibir objeto formato json
app.use(express.json()) //PERMITE RECIBIR OBJETOS EN FORMATO 
app.use(express.urlencoded({ extended: true })); //permite escribir parametros en la ruta

//MIDDLE DE 3ROS
app.use(morgan('dev')); // nos brinda detalles de nuestra terminal
app.use(cors());//permite recibir peticiones remotas
//primer endpoint o ruta para prueba
app.get('/test',(req,res)=>{
    console.log('objeto req:',req);  
    //res.send('aqui va la respue')
    res.status(200).json({message:'aqui iria mi respuesta ++'});
})