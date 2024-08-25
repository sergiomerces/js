const idade = 72;

if(idade < 16){
    console.log('Não vota');
} else if(idade < 18 || idade > 65){
    console.log('Voto Facultativo');
} else {
    console.log('É obrigado a votar!');
}

