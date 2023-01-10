function envia(){
    var nome = document.getElementById('nome').value
    var altura = (document.getElementById('altura')).value
    var peso = (document.getElementById('peso')).value
    var tela = document.getElementById('resultado')
    var imc = peso / (altura ** 2)
    imc = imc.toFixed(2)
    let classificacao = ''
    
    if(nome == "" || altura == "" || peso == ""){
        window.alert('Favor preencher todos os campos!')
    }
    else{
        if(imc < 18.5){
            classificacao = `Abaixo do peso normal.`
        }
        else if(imc < 25){
            classificacao = `Peso normal.`
        }
        else if(imc < 30){
            classificacao = `Sobrepeso.`
        }
        else if(imc < 35){
            classificacao = `Obesidade classe 1.`
        }
        else if(imc < 40){
            classificacao = `Obesidade classe 2.`
        }
        else{
            classificacao = `Obesidade classe 3.`       
        }
    }
    tela.innerHTML = `Olá ${nome}, seu IMC é de ${imc} e sua situação atual é: ${classificacao}`
   
}

