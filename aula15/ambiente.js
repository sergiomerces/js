//declarando um array
let nome = [];
let numero = [5, 8, 4];

console.log(numero);

//adicionando um elemento numa posição específica
numero[3] = 6;
console.log(numero);

//adicionando um elemento ao fim da lista
numero.push(2);
console.log(numero);

//ordenando a lista
numero.sort();
console.log(numero);

//percorrendo um array
for(let index = 0; index < numero.length; index++)
    console.log(numero[index]);

//outro modo
for(let item in numero)
    console.log(item);

//localizando um elemento
let canal = [6, 15, 26, 30, 55];
let posicao = canal.indexOf(26);
console.log(`O canal 26 está na posição ${posicao}`);