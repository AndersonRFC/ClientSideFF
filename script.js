const socket = new WebSocket('ws://localhost:5084/ws');

// Evento que é chamado quando a conexão WebSocket é aberta
socket.onopen = function(event) {
    console.log('Conexão WebSocket aberta');
};

// Evento que é chamado quando uma mensagem é recebida do servidor
socket.onmessage = function(event) {
    console.log('Mensagem do servidor:', event.data);
    adicionarMensagemAoChat(event.data);
};

// Função para enviar uma mensagem para o servidor
function enviarMensagem() {
    const mensagem = document.getElementById("message-input").value;
    socket.send(mensagem);
    adicionarMensagemAoChat("Você: " + mensagem); // Adiciona a mensagem enviada pelo cliente ao chat
    document.getElementById("message-input").value = ""; // Limpa o campo de entrada após enviar a mensagem
}

// Adiciona uma mensagem ao chat
function adicionarMensagemAoChat(mensagem) {
    const messageList = document.getElementById("message-list");
    const listItem = document.createElement("li");
    listItem.textContent = mensagem;
    messageList.appendChild(listItem);
}

// Configura o evento de clique do botão de envio
document.getElementById("send-button").addEventListener("click", () => {
    enviarMensagem();
});

// Configura a tecla Enter para enviar a mensagem
document.getElementById("message-input").addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        enviarMensagem();
    }
});
