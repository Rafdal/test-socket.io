// Inicie el archivo con // $ npm init --yes
// Instale deps con // $ npm i express socket.io -save

// Para bajar las deps ejecutar solo // $ npm install

// @ts-check

console.log("Hey What's up freshgang?");


const express = require('express');
// const morgan = require('morgan'); // ! IMPLEMENTAR REDIRECCIONAMIENTO
// const mongoose = require('mongoose'); // ! IMPLEMENTAR REDIRECCIONAMIENTO
const path = require('path');

// const Client = require('./models/client'); // ! IMPLEMENTAR REDIRECCIONAMIENTO

const app = express();

/* 
! IMPLEMENTAR REDIRECCIONAMIENTO
mongoose.connect('mongodb://localhost/socket-clients', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB Connected'))
    .catch(err => console.log('[Error] DB', err)); */


// settings
app.set('port', process.env.PORT || 3000); // Uso el puerto por defecto del sistema, y si no esta configurado uso el 3000

// static files
app.use(express.static(path.join(__dirname, 'public'))); // Entrego la ruta a la carpeta /public

// middlewares
// app.use(morgan('dev')); // ! IMPLEMENTAR REDIRECCIONAMIENTO

// start the server
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


const SocketIO = require('socket.io');
const io = SocketIO(server);



// % IMPLEMENTACION HARDCODEADA TEMPORAL PARA DIRECCIONAMIENTO
var socketClientID;

// WebSockets
io.on('connection', (socket) => {

    console.log('[new connection] ID:', socket.id, socket.client.request.headers['user-agent'],);       
    
    // const client = new Client() // ! IMPLEMENTAR REDIRECCIONAMIENTO

    socket.on('chat:mensaje', (data) => {
        console.log('received:',data);

        /* 
         @ Reenvio a todos los sockets con .emit 
         * Hay otras opciones para enviar a ciertos usuarios
         * o bien para enviar a todos excepto al que
         * genero el mensaje. 
         - Como esto lo esta enviando el mismo
         - servidor, puedo usar el mismo evento (chat:mensaje)
         - y no se generara ningun bucle extranio ya que el listener
         - esta de este lado (del servidor) y puedo
         - colocar uno distinto en los clientes para el mismo
         - tipo de evento 
         */

        io.sockets.emit('chat:mensaje', data);
    });

    socket.on('chat:escribiendo', (data) => {
        // Con este metodo solo le envio los datos
        // Al resto de sockets y no al remitente
        socket.broadcast.emit('chat:escribiendo', data);
    });


    socket.on('module:connect', (data) => {
    
        console.log('[MODULE:CONNECT]');    
        try {
            var obj = JSON.parse(data);
            // console.log(obj);
            
            // % IMPLEMENTACION HARDCODEADA TEMPORAL PARA DIRECCIONAMIENTO            
            if (obj.user == "Rafa", obj.mac == "3C:71:BF:FF:76:3C") 
                socketClientID = socket.id;
            console.log('[New module] ID:', socketClientID, obj.mac, obj.user, obj.sdk);
        } catch (error) {
            console.error('[Error]', error);
        }
    });


    // Intermediario
    // ! TODO: Implementar direccionamiento
    socket.on('module:control', (data) => {
        
        try {
            var obj = JSON.parse(data);

            console.log('received control packet from:', socket.id);
            console.log(obj);
            
            // Reenvio el paquete al ESP32
            if (socketClientID != null) // % IMPLEMENTACION HARDCODEADA TEMPORAL PARA DIRECCIONAMIENTO
                io.sockets.connected[socketClientID].emit('module:control', obj.packet);
            else
                console.error('[Error]: ESP32 is OFFLINE');
        } catch (error) {
            console.error('[Error]', error);
        }        
    });



    /* socket.on('json:test', (data) => {
        
             
    }); */
    
});