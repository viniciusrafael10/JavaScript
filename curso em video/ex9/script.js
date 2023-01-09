let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let vetor = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = " "
    }
    else{
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function soma(){
    let s = 0
    for(let i in vetor){
    s += vetor[i]
    }
    return s
}

function media(){
    return soma() / vetor.length
    
}

function finalizar(){
    if(vetor.length == 0){
            window.alert('Adicione valores para continuar')
    }
    else{
        let tot = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        for(let pos in vetor){
            if(vetor[pos] > maior){
                    maior = vetor[pos]
            }
            if(vetor[pos] < menor){
                    menor = vetor[pos]
            }

        }
            res.innerHTML = " "
            res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
            res.innerHTML += `<p> O maior valor informado foi ${maior} </p>` 
            res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
            res.innerHTML += `<p> A soma dos valores informado é ${soma()} </p>`
            res.innerHTML += `<p> A média dos valores informado é ${media()} </p>`
        }
}
