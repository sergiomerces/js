function carregar(){
    let mensagem = window.document.getElementById('mensagem');
    let foto = window.document.getElementById('foto');
    let agora = new Date();
    let hora = agora.getHours();
    
    mensagem.innerHTML = `${agora.toLocaleString()}`;

    if(hora > 5 && hora < 11){
        foto.innerHTML = "<img src='manha.png'>";
        document.body.style.background = '#b5d2d8';
    } else if(hora > 11 && hora < 17){
        foto.innerHTML = "<img src='tarde.png'>";
        document.body.style.background = '#63b583';
    } else if(hora > 17 && hora <= 23){
        foto.innerHTML = "<img src='noite.png'>";
        document.body.style.background = '#071c1a';
    } else {
        foto.innerHTML = "<img src='madrugada.png'>";
        document.body.style.background = '#10151b';
    }
    
}