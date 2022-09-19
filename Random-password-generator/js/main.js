let senha = document.querySelector(".senha")

function criarSenha(){
    const chars=
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%¨&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let tamanhoSenha = 12;
    let senha = '';

    for(var i=0; i<= tamanhoSenha; i++){
        let randomNum = Math.floor(Math.random() * chars.length);
        senha += chars.substring(randomNum, randomNum +1);
    }

    document.getElementById('senha').value = senha;
}

function copiarSenha(){
    let texto = document.getElementById('senha');
    texto.select();
    document.execCommand('copy');
    alert("Senha copiada para a área de transferência")
}