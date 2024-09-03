function contar() {
    let inicio = Number(document.querySelector('input#txtinicio').value);
    let fim = Number(document.querySelector('input#txtfim').value);
    let passo = Number(document.querySelector('input#txtpasso').value);
    let resposta = document.querySelector('div#resposta');

    resposta.innerHTML = ' Contando:<br>';

    while(inicio <= fim) {
        resposta.innerHTML += `${inicio} 👉🏾`;
        inicio += passo;
    }

    resposta.innerHTML += `🏁`;
}