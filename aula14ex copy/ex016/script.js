function contar() {
    let inicio = Number(document.querySelector('input#txtinicio').value);
    let fim = Number(document.querySelector('input#txtfim').value);
    let passo = Number(document.querySelector('input#txtpasso').value);
    let resposta = document.querySelector('div#resposta');

    if(inicio === ''){
        resposta.innerHTML = 'O início não pode ser vazio...';
    } else if (fim === ''){
        resposta.innerHTML = 'O fim não pode ser vazio...';
    } else if(passo == ''){
        resposta.innerHTML = 'O passo não pode ser vazio ou zero...';
    } else if(inicio === fim){
        resposta.innerHTML = 'Início e fim não podem ser o mesmo número...';
    } else {
        resposta.innerHTML = 'Contando:<br>';

        while(inicio <= fim) {
            resposta.innerHTML += `${inicio} \u{1F449}`;
            inicio += passo;
        }

        resposta.innerHTML += `\u{1F3C1}`;
    }
}


