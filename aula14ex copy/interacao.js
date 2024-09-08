const pessoa = [
    {
        nome: 'Sérgio',
        nascimento: 1979,
        altura: 1.7,
        peso: 93.6,
    }
]

for(let atributo in pessoa){
    console.log(pessoa.nome);
}