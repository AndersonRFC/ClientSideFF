const socket = new WebSocket('ws://localhost:5083/ws');

// Evento que é chamado quando a conexão WebSocket é aberta
socket.onopen = function(event) {
    console.log('Conexão WebSocket aberta');
    
    // Espera 1 segundo antes de enviar outra mensagem (opcional)
    setTimeout(() => {
        enviarMensagem();
    }, 1000);
};

// Evento que é chamado quando uma mensagem é recebida do servidor
socket.onmessage = function(event) {
    console.log('Mensagem do servidor:', event.data);
};

// Função para enviar uma mensagem para o servidor
function enviarMensagem() {
    const mensagem = 'Mensagem do cliente';
    socket.send(mensagem);
}

document.getElementById("btn").addEventListener("click", () => {
    console.log("Botão clicado");
    enviarMensagem();
});
