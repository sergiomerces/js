function verificar() {
    let agora = new Date();
    let anoSistema = agora.getFullYear();
    let anoNascimento = Number(document.getElementById('txtano').value);
    let sexo = document.getElementsByName('radsexo');
    let resposta = document.getElementById('resposta');

    let idade = anoSistema - anoNascimento;

    if(anoNascimento == "") {
        alert('Preencha o ano de nascimento!');
        return;
    } else if(anoNascimento > anoSistema) {
        alert(`Verifique o ano informado! Ninguém nasceu em ${anoNascimento} ainda!`);  
        return;
    } else {
        alert('Esta pessoa provavelmente não está mais viva!');
    }

    let genero = "";

    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(sexo[0].checked) {
        genero = 'homem';

        if(idade < 12) {
            img.setAttribute('src', 'menino.png');
        } else if(idade < 18) {
            img.setAttribute('src', 'rapaz.png');
        } else if(idade < 60) {
            img.setAttribute('src', 'homem.png');
        } else {
            img.setAttribute('src', 'idoso.png');
        }

    } else {
        genero = 'mulher';

        if(idade < 12) {
            img.setAttribute('src', 'menina.png');
        } else if(idade < 18) {
            img.setAttribute('src', 'moca.png');
        } else if(idade < 60) {
            img.setAttribute('src', 'mulher.png');
        } else {
            img.setAttribute('src', 'idosa.png');
        }

    }

    resposta.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>!`;
    resposta.appendChild(img);

    resposta.style.textAlign = 'center';
    
}