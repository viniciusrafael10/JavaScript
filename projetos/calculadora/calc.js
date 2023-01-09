function inserir(num){
    var screen = document.getElementById('tela')
    screen.innerHTML += num
}

function calcular(){
        var resultado = document.getElementById('tela').innerHTML;
         document.getElementById('tela').innerHTML = eval(resultado);          
}

function limpar(){
    var screen = document.getElementById('tela')
    screen.innerHTML = " "
}

function apagar(){
    var resultado = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = resultado.substring(0, resultado.length -1);
}