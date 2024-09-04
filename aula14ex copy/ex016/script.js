function contar() {
    let inicio = Number(document.querySelector('input#txtinicio').value);
    let fim = Number(document.querySelector('input#txtfim').value);
    let passo = Number(document.querySelector('input#txtpasso').value);
    let resposta = document.querySelector('div#resposta');

    resposta.innerHTML = ' Contando:<br>';

    while(inicio <= fim) {
        resposta.innerHTML += `${inicio} \u{1F449}`;
        inicio += passo;
    }

    resposta.innerHTML += `\u{1F3C1}`;
}


