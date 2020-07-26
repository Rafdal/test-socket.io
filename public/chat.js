console.log('chat codigo cliente');

const socket = io(); // Solo funciona asi si lo despliego en el mismo dominio, caso contrario debo indicarlo: io('dominio')

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let btnControl = document.getElementById('control');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
    msg = {
        username: username.value,
        message: message.value
    }
    socket.emit('chat:mensaje', msg);
    message.value = ''; // Borro el textBox del body mensaje
});

btnControl.addEventListener('click', function(){
    socket.emit('module:control');
});

message.addEventListener('keypress', function() {
    socket.emit('chat:escribiendo', username.value);
});

// En evento chat mensaje
socket.on('chat:mensaje', function(data) { 
    actions.innerHTML = ''
    output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
    </p>`
});

socket.on('chat:escribiendo', function(data) {    
    actions.innerHTML = `<p><em>${data} esta escribiendo</em></p>`
});