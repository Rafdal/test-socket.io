// Inicie el archivo con // $ npm init --yes
// Instale deps con // $ npm i express socket.io -save

// Para bajar las deps ejecutar solo // $ npm install

// @ts-check

console.log("Hey What's up freshgang?");


const express = require('express');
const path = require('path')
const app = express();


// settings
app.set('port', process.env.PORT || 3000); // Uso el puerto por defecto del sistema, y si no esta configurado uso el 3000


// static files
app.use(express.static(path.join(__dirname, 'public'))); // Entrego la ruta a la carpeta /public


// start the server
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


const SocketIO = require('socket.io');
const io = SocketIO(server);

// WebSockets
io.on('connection', (socket) => {

    console.log('new connection', socket.client.request.headers['user-agent']);
    

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

    // Intermediario
    // ! TODO: Implementar direccionamiento
    socket.on('module:control', (data) => {
        
        socket.broadcast.emit('module:control', data);
    });
    
});