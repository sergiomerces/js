function calcular(){
    let tabuada = Number(document.querySelector('input#txttabuada').value);
    let resposta = document.querySelector('div#resposta');

    if(tabuada == ''){
        resposta.innerHTML = 'Informe um número...';
    } else {

        resposta.innerHTML = 'Calculando...'
        for(let index = 0; index < 11; index++) {
            resposta.innerHTML += `<p>${tabuada} X ${index} = ${tabuada * index}</p>`
        }
    }
}

