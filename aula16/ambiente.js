function parImpar(numero) {

    if(numero % 2 === 0){
        return 'par';
    } else {
        return 'ímpar';
    }
}

let resposta = parImpar(5);
//parImpar(8);

console.log(resposta);