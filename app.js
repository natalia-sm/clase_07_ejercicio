// volver a iniciar un servidor TCP
// identificar propiedades para capturar la direccion ip y el puerto del socket
// establecer un nombre aleatorio para cada socket conectado al servidor
// guardar cada socket en un array de sockets
// mostrar un mensaje para todos los sockets cada vez que alguien se conecte
// identificar el evento de desconexion del socket y enviar un mensaje a todos los sockets notificando la desconexion
// eliminar el socket del array de sockets a notificar de lo contrario nos dara error en los proximos mensajes
// crear una función broadcast que envíe en mensaje recibido por el evento data a todos los sockets menos al que lo envía

const net = require('net');

let sockets = [];

const servidor = net.createServer(socket => {
    let {localAddress, localPort, remoteAddress, remotePort} = socket;
    
    socket.id = `Socket-${Math.floor(Math.random()*1000)})`;
    
    sockets.push(socket);

    if(socket.length) {
        sockets.forEach(s=>{
            s.write(`Se ha conectado alguien`);
        })
    }
   
    let buffer = [];

    socket.on('data', data=>{
        buffer.push(data);
        if (data == "enter"){ //tecla enter, escribir esto bien
            buffer = Buffer.concat(buffer); //hacer otra variable, buffer completo x ejemplo., porque el proximo 
            //ingreso de data falla ya que la variable no es mas un array sino un buffer.
        }
    })

});

servidor.listen(9000);