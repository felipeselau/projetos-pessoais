let numero = 0;

function aumentar(){
    numero++;
    mostrarNaTela();
}

function diminuir(){
    numero--;
    mostrarNaTela();
}

function zerar(){
    numero=0;
    mostrarNaTela();
}

function mostrarNaTela(){
    const p = document.querySelector("#numero");
    const state = document.querySelector(".state");
    p.innerText = numero
    
    if(numero!=0 && numero <0){
        state.innerHTML("<h3>O Numero e negativo</h3>")
    }
}

mostrarNaTela();