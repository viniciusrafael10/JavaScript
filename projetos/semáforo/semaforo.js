function funcionar(){      
        ligarRed();
        setTimeout(desligarRed,3000)
        setTimeout(desligarGreen,6000)
        setTimeout(desligarYellow,7500)
        setTimeout(funcionar,7501)
    }

function ligarRed(){
    let vermelho = document.getElementById('vermelho')
    vermelho.style.backgroundColor = 'red'
    vermelho.style.boxShadow = '0 0 100px red';
    
}
function desligarRed(){
    let vermelho = document.getElementById('vermelho')
    vermelho.style.backgroundColor = 'rgba(110, 3, 3, 0.595)'
    vermelho.style.boxShadow = 'none';
    verde.style.backgroundColor = 'rgba(0, 249, 0, 0.989)'
    verde.style.boxShadow = '0 0 100px rgba(0, 249, 0, 0.989)';
}
function desligarYellow(){
    let amarelo = document.getElementById('amarelo')
    amarelo.style.backgroundColor = 'rgb(163, 163, 6)'
    amarelo.style.boxShadow = 'none';
}

function desligarGreen(){
    let verde = document.getElementById('verde')
    verde.style.backgroundColor = 'rgba(4, 90, 4, 0.653)'
    verde.style.boxShadow = 'none';
    amarelo.style.backgroundColor = 'yellow'
    amarelo.style.boxShadow = '0 0 100px yellow';
}