let name = "";
let nameOn = {};
let parT = {};
let tip = "message"
let messages = document.querySelector(".chat");
let messageChat = [];
let para = "Todos";

function entrar(){
    prompt("Digite o nome do usuário")

}
entrar()


function sendMessage(){
        let msg1 = document.querySelector(".Sendmsg").value
        let msg = {
            from: nome,
            to: para,
            text:msg1,
            type:tip,
        };
        console.log(msg)
        axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", msg);
        document.querySelector(".Sendmsg").value = ''
    }

