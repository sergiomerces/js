//demostrando como criar elementos HTML dentro de um formulario com JavaScript
//não obtive sucesso com esse exemplo proposto pelo Guanabara

function mostrar(){
    let num = document.getElementById('txtnumero');
    let tabuada = document.getElementById('seltab');

    if(num.value.length == 0) {
        alert('Por favor digite um número!');
    } else {
        let numero = Number(num.value);
        let multiplicador = 1;

        tabuada.innerHTML = '';

        while(multiplicador <= 10) {
            let item = document.createElement('option');

            item.text = `${numero} X ${multiplicador} = ${numero * multiplicador}`;
            item.vale = `tabuada ${multiplicador}`;

            tabuada.appendChild(item);
            multiplicador++;
        }
    }
}

