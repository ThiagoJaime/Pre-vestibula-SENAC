let nome = document.getElementById('nome')
let email = document.getElementById('email');
let msg = document.getElementById('msg');
let btn = document.getElementById('btn');
let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//Uma variavel para cada input do formulário, para que consiga criar um evento para o botão e uma condição para cada input que precisa ser preenchido.

btn.addEventListener('click', validacao)//Dizendo que quando clicar no botão(btn), quero que 'escute' o que está dentro da função chamada 'validacao'.

function validacao() {
    if (nome.value === '' || msg.value === '') { //Se qualquer um dos input tiver com o valor vazio, mostrar um alerta pedindo para preencher os campos.
        alert('Preencha todos os campos');
    } else if (!filtro.test(email.value)) { //Após passar na validação do nome e msg, irá validar o email com o Regex criado na variável 'filtro'
        alert('Formato do e-mail inválido. Tente novamente.')
    } else { //Senão, mostrar um alerta confirmando o envio do formulário e direcionando para a página inicial.
        alert("Sua mensagem foi enviada! Agradecemos o contato.")
        window.location.href = "index.html"
    }
}


