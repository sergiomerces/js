![Introdução ao JavaScript](https://hermes.dio.me/articles/cover/1caddefa-9a2d-4d9e-aa3d-d71661d9af6d.jpg)

# 📝 Curso de JavaScript 

Notas de aula, exemplos e exercícios do [Curso de JavaScript](https://www.cursoemvideo.com/curso/javascript/) do [Curso em Video](http://www.cursoemvideo.com) com o **Gustavo Guanabara**.

[Referência Markdown] (https://kde.github.io/ghostwriter/documentation.html#headings)

* criada em 1995 pela equipe de desenvolvedores da Netscape Mozzila
* JavaScript é uma linguagem de programação **multiparadigma**
* aplicada para criar **interatividade com usuário**
* é uma linguagem **_open source_**
* é uma linguagem **interpretada**
* nasceu como uma linguagem **_client side_**
* é **_case sensitive_**
* possui **tipagem dinâmica**
* linguagem **multiplataforma** por usar o ambiente web

---
## ⚙️ Requisitos
1. um computador com qualquer sistema operacional
2. um navegador preferencialmente o Google Chrome ou Chromium
3. um editor de código preferencialmente o Microsoft Visual Studio Code
4. noções básicas de HTML
5. noções básicas de CSS

---
## 📄 Criando um arquivo HTML
No *Microsoft Visual Studio Code* para criar um template .html de forma rápida, basta criar o arquivo e digitar em letras minúsculas:

    *html:5*

Ao começar a digitar o *intellisense* do vai dar a opção de autoseleção para completar.

Se você for desenvolver seu conteúdo em português é importante alterar o idioma da página .html para otimizar o suso de recursos de texto:

    <html lang="en">
    para
    <html lang="pt-br">

Lembrando que para um código organizado e e legível a outros desenvolvedores embora o JavaScript moderno não necessite que a linha de comando termine com ponto e vírgula (;) para que o código seja executado, o recomendável é fazer uso.

Outra situação a observar é que o JavaScript é *case sensitive*; ou seja caracteres maiúsculos e minúsculos fazem diferença.

---

## Inserindo um código JavaScript no HTML

Para que em caso de erro o código Javascript não impeça o caaregamento da página, a boa prática recomenda que ele seja inserido no fim do código antes do fechamento da *tag* </html>

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu primeiro programa...</title>
    </head>
    <body>
        <h1>Olá mundo!</h1>
        <p>Já me livrei da maldição!</p>
        <script>
            //inserir o script aqui
        </script>
    </body>
    </html>

---
## ⚠️ Caixas de mensagens no navegador

Há três métodos para gerar no navegador caixas de mensagens:

1. alert
2. confirm
3. prompt

### 🔴 alert
É um método da janela do navegador que cria uma caixa de alerta com uma mensagem de saída para o usuário e um botão *OK* para seu fechamento

    window.alert('Hello world!');

Também pode ser escrita de forma ais simplificada sem o *window*.

    alert('Hello world!');

A mensagem é passada como um parâmetro no formato *string*, ou seja entre aspas simples (´ ´) ou duplas (" ").

### 🟡 confirm
É um método da janela do navegador que cria uma caixa com uma mensagem no formato *string* e apresenta dois botões de opção, *Cancelar* e *OK*; esse botões retornam valores *booleanos*, *true* para OK e *false* para cancelar.

    window.alert('Você está gostando de JavaScript?');

### 🔵 prompt
Este método ambém gera uma caixa como os dois anteriores com uma mensagem para o usuário com um botão Cancelar e outro de Ok, que permite seu fechamento, porém este método é especial por se tratar também de um método de entrada de dados para o usuário; ou seja, por ele é possível que o usuário interaja com o código com dados que podem alterar a execução do script.

    window.alert('Qual o seu nome?', 'Digite o seu primeiro e último nome');

---

## 💬 Inserindo comentários no código JavaScript
Os comentários podem ser feitos em trechos do código para facilitar a manutenção por outros desenvolvedores ou para você mesmo lembrar de uma funcionalidade importante.

    // comentários de uma linha

    /*
        comentários
        de mais de 
        uma linha
    */

O trecho comentado não é executado pelo interpretador JavaScript.

---
## 🗃️ Variáveis
São espaços delimitados na memória RAM do computador para receber dados.

Para declarar uma variável usamos a seguinte sintaxe:

    let nome = 'Sérgio Mercês';
    let idade = 45;

Toda variável em JavaScript precisa receber um identificador (rótulo) que deve seguir as regras de boas práticas:

* deve preferencialmente ser um nome significativo no contexto do código
* podem iniciar com caractere alfabético, cifrão ou underline
* não pode começar com caractere numérico
* é possivel usar símbolos nos demais caracteres
* não pode conter espaços
* não podem ser palavras reservadas da linguagem
* preferencialmente usar a notação *camel case*

### Tipos primitivos de variáveis

* number 
    * int
    * float
* string
* boolean
* null
* undefined
* object
* function

A função *typeof* informa qual o tipo dedado da variável.

Declarando um **number**

        let ano = 2024;
        let altura = 1.65;
        typeof(ano);
        typeof(altura);

**string**

        let ano = 2024;
        typeof(ano);

**boolean**

    let casado = true;
    let temFilhos = nao;
    typeof(casado);
    typeof(temFilhos);

**null**

    let profissao = null;
    typeof(profissao);

**undefined**

    let salario;
    typeof(salario);

**Object**

    let carro = {
        marca: 'Fiat',
        modelo: 'sedan',
        ano: 2020,
        combustivel: 'flex',
        portas: 4
    }
    typeof(carro);

### Escopo da variável
1. var - usada para variáveis globais podem ser acessadas de qualqer parte do código
2. let - fortemente recomendada pode ser acessada apenas no bloco local
3. const - possui escopo global e **imutabilidade**

---
## Concatenação
O sinal de adição é usado para concatenar (unir strings) numa expressão

    let nome = prompt('Qual o seu nome?');
    alert('Bem vindo ' + nome + '!');

## Conversão de *string* para *number*
Todo conteúdo capturado pelo *prompt* é do tipo *string* naturalmente, para evitar erros com o efeito de concatenação para a aoperação matemática de adição, devemos usar a conversão do dado capturado para o tipo *number*

    let numero1 = Number(prompt('Digite o primeiro número'));
    let numero2 = Number(prompt('Digite o segundo número'));
    let soma = numero1 + numero2;

    alert('A soma de ' + numero1 + ' + ' + numero2 + ' é igual a ' + soma);

O number faz a conversão dinâmicamente no tipo **_int_** (inteiro) ou **_float_** (decimal)

Para conversões específicas também podemos usar o método *parse*:

    Number.parseInt(valor1);
    Number.parseFloat(valor2);
    typeof(valor1);
    typeof(valor2);

## Conversão de *number* para *string*:

Considerando a variável de nome *valor*:

    String(valor);
    valor.toString();
    typeof(valor);

---

## Formatação de *strings*

Por padrão fazemos a declaração de valores de variáveis do tipo *string* entre **aspas** simples ('') ou duplas ("").

    var linguagem = 'JavaScript';
    
    alert('Eu estou aprendendo ' + linguagem);
    alert("Eu estou aprendendo ' + linguagem");

### Template *string*

Nesses casos para que o interpretador possa compreender e substituir a variável pelo seu valor temos que fazer uso do **operador de concatenação (+)** e a variável fica fora das aspas que delimitam a *string*.

Para que possamos usar a variável dentro do campo de delimitação da *string* usamos ao invés das aspas a **crase (``)** como marcador e o rótulo da variável dentro de chaves precedidas por cifrão *${linguagem}*, assim o valor é interpolado dentro desse *template string*.

    var linguagem = 'JavaScript';
    
    alert(`Eu estou aprendendo ${linguagem}.`);

### Tamanho de uma *string*
Para saber quantos caracteres tem uma string usamos o método *.length*:

    let nome = 'Sergio da Costa Merces';

    nome.legth;

### Formatando todos caracteres maiúsculos
Para tornar toda expressão em maiúscula usamos o método *.toUpperCase()*

    let carro = 'ford';

    carro.toUpperCase();

### Formatando todos caracteres minúsculas
Para tornar toda expressão em minúscula usamos o método *toLowerCase()*

    let carro = 'ford';

    carro.toLowerCase();

---

## Formantando números
Para definir o número de casas decimais usamos o método *.toFixed()*

    let precoDaGasolina = 5.549;
    let temperatura = 27.315
    precoDaGasolina.toFixed(2);
    temperatura.toFixed(1);

Na programação usamos a notação americana, com o ponto (.) para separar a parte inteira da decimal de um número de ponto flutuante; para que tenhamos uma saída usando vírgula, como na notação brasileira, podemos combinar o método *toFixed()*
 com *.replace()*

    let peso = 75.315
    peso.toFixed(1).replace('.', ',');

Exemplificando melhor:

        document.write(`O preço formatado da Gasolina ${precoDaGasolina.toFixed(2)}`);
        document.write(`<br>A temperatura formatada ${temperatura.toFixed(1)} ºC`);
        
        document.write(`<br>O preço formatado pt-br da Gasolina ${precoDaGasolina.toFixed(2).replace('.', ',')}`);
        document.write(`<br>A temperatura formatada pt-br ${temperatura.toFixed(1).replace('.', ',')} ºC`);

### Formatando valores monetários internacionais
O método *.toLocaleString* ajuda nessa tarefa é um recurso que insere o símbolo da moeda à esquerda do número e sem a necessidade de usar o *.replace()* já troca o ponto por vírgula para a sepaeação dos decimais.

    let salario = 2587.85;
    document.write(`<br>${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
    document.write(`<br>${salario.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}`);
    document.write(`<br>${salario.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})}`);

---

## Operadores aritméticos
São operadore usados para fazer cálculos matemáticos.

( + ) soma

( - ) subtração

( * ) multiplicação

( / ) divisão

( % ) módulo

( ** ) potenciação

### Precedência de operadores
O parêntese tem prioridade sobre a ordem de precedência; depois a potenciação; seguida de multiplicação, divisão ou módulo e por último soma ou subtração.

1. ( )
2. **
2. * ou / ou %
3. + ou -

---

## Operadores de atribuição

    let a = 5 + 3;
    let b = a % 5;
    let c = 5 * b ** 2;
    let d = 6 * 2 / d;
    let f = b % e + 4 / e;

### Simplificando atribuições

    let n = 3

    n = n + 4   n += 4
    n = n - 5   n -= 5
    n = n * 4   n *= 4
    n = n / 2   n /= 2
    n = n ** 2  n **= 2
    n = n % 5   n %= 5

### Incremento/Decremento

    var x = 5;
    x = x + 1 <=> x += 1 <=> x++;
    x = x - 1 <=> x -= 1 <=> x--;

----

## Operadores relacionais
São operadores usados para fazer comprações que têm como retorno sempre uma valor *booleano* (verdadeiro ou falso).

    >   maior

    <   menor
    >=  maior ou igual

    <=  menor ou igual

    ==  igual (testa o valor e não o tipo)

    === idêntico (testa valor e tipo)

    !=  diferente (testa apenas valor)

    !== desigual restrito (testa valor e tipo)

Operadores relacionais não possuem ordem de precedênciam são resolvidos da esquerda para a direita na ordem que forem aparecendo.

----

## Operadores lógicos
São usados para operações de lógica *booleana*

!   not     negação
&&  and     conjunção
ǁ   or      disjunção

A ordem de precedência de operadores lógicos é primeiro *not*, seguida de *and* e *or*.

---

## Operador ternário

O perador ternário é um operador composto por três partes, uma expressão lógica, uma bloco para verdadeiro e outro para falso.

teste **?** *true* **:** *false*

    media >= 7.0 ? 'Aprovado' : 'Reprovado';

---

## DOM  - Document Object Model
A árvore DOM é a forma como os elementos de uma página se organizam no JavaScript a partir de nós até uma raiz. Tudo em JavaScript está dentro de uma raiz DOM, que é a janela do navegador.

![Árvore DOM](https://miro.medium.com/v2/resize:fit:1400/1*mMmuOhNytgqP7lrU9HPTpw.jpeg)

A partir da árvore DOM é possível acessar qualquer elemento da página.

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Primeiros passos com DOM</title>
        <style>
            body {
                background: #5868f7;
                color: #fff;
                font: normal 16pt Arial;;
            }
        </style>
    </head>
    <body>
        <h1>Iniciando os estudos DOM</h1>
        <p>Aqui vai o resultado.</p>
        <p>Aprendendo a usar <strong>DOM</strong> em JavaScript.</p>
        <div>Clique em mim</div>
        <script>
            window.document.write('Ola mundo!');
            window.document.write('<br>' + window.document.charset);
            window.document.write('<br>' + window.navigator.appName);
            window.document.write('<br>' + window.document.URL);        
        </script>
    </body>
    </html>

### Acessando e manipulando elementos DOM

Para acessar elementos HTMl numa página usamos seletores:

    

#### Por marca    
*getElementsByTagName()*

Permite selecionar mais de um elemento HTML do mesmo tipo através da **tag HTML**. Para capturar um elemento específico entre outros temos que usar o índice do elemento como se fosse um *array*.

    <script>
        let paragrafoUm = window.document.getElementsByTagName('p')[0];
        window.document.write('<br><br>Está escrito assim: ' + paragrafoUm.innerHTML);
        paragrafoUm.style.color = 'yellow';
    </script>
    
#### Por ID   
*getElementById()*

Permite selecionar um elemento específico através da propriedade **ID** definido no código HTML.

    let div = window.document.getElementById('mensagem');
    div.style.background = 'green';
    div.innerText = 'Estou aguardando...'

    /*
        outra forma de injetar texto no elemento, quando for fazer apenas uma vez

        window.document.getElementById('mensagem').innerText = 'Estou aguardando...'
    */

#### Por Nome   
*getElementsByIdName()*

Permite selecionar um elemento específico através da propriedade **name** definida no código HTML.

    let div2 = document.getElementsByName('texto')[1];
    div2.innerHTML = 'Texto inserido com name';

#### Por Classe   
*getElementsByClassName()*

Permite selecionar um elemento específico através da propriedade **class** definida no código HTML.

#### Por Seletor   
*querySelector()*

*querySelectorAll()*

Permite selecionar um elemento específico através dos seletores definida no código HTML. Essa é uma forma mais nova recomendada.

    let titulo = document.querySelector('h1#titulo');
    titulo.style.color = 'orange';

---

## Eventos DOM
Evento é todo tipo de interação que pode acontecer com um elemento da página, os mais comuns são eventos de mouse.

*mouseenter*    quando o mouse entra na área do elemento

*mousemove*     quando o mouse se move sobre o elemento

*mousedown*     quando o botão do mouse é pressionado

*mouseup*       quando o botão do mouse é solto

*click*    quando o botão do mouse é presionado e solto rapidamente

*mouseout*      quando o mouse sai da área do elemento

## Disparando um evento
Para executar uma açõa por meio de evento precisamos do auxílio de uma função.

Função é um bloco de código que disparado somente quando o evento ocorrer, executando as ações pré-definidas no bloco.

    function nomeAcao(parametro) {
        bloco;
    }

Como boa prática o nome da função deve ser o nome da ação executada.

Evento usando disparador no HTML:

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eventos DOM</title>
        <style>
            div#area {
                background-color: #3a8d3a;
                width: 200px;
                height: 200px;
                font: normal 20pt Arial;
                color: #fff;
                text-align: center;
                line-height: 200px;
            }
        </style>
    </head>
    <body>
        <div id="area" onClick="clicar()" onmouseenter="entrar()" onmouseout="sair()">
            Interaja...
        </div>
        <script>
            const area = document.getElementById('area');

            function clicar() {
                area.innerText = 'Clicou!'
                area.style.background = 'red';
            }

            function entrar() {
                area.innerText = 'Entrou!';
            }

            function sair() {
                area.innerText = 'Saiu!';
                area.style.background = '#3a8d3a'
            }
        </script>
    </body>
    </html>

### Usando *listeners* para disparar eventos
Não usamos os eventos na no código HTML, usamos a função *addEventListener('evento', nome)* como no trecho reescrito abaixo:

    <body>
        <div id="area">
            Interaja...
        </div>
        <script>
            const area = document.getElementById('area');
            area.addEventListener('click', clicar);
            area.addEventListener('enter', entrar);
            area.addEventListener('out', sair);

            function clicar() {
                area.innerText = 'Clicou!'
                area.style.background = 'red';
            }

            function entrar() {
                area.innerText = 'Entrou!';
            }

            function sair() {
                area.innerText = 'Saiu!';
                area.style.background = '#3a8d3a'
            }
        </script>
    </body>

---

## Estrutura condicional

### if... else
É a estrutura de condição mais simples e usual ela a partir de uma condição pode executar um bloco, caso seja verdadeiro, ou outro, caso seja falso; permitindo assim desvios no fluxo do código.

    if(condicao){
        bloco se a condição for verdadeira
    } else {
        bloco se a condição for falsa
    }

## Usando o *Nodejs*
O Nodejs é uma biblioteca JavaScript que roda no ambiente do terminal, ela também pode ser executada no lado do servidor.

Vamos dar um exemplo de um arquivo JavaScrit puro (.js) ra rodar no terminal testando uma estrutura condicional:

    let velocidade = 60.5;

    console.log(`A velocidade do seu carro é ${velocidade} km/h`);

    if(velocidade > 60){
        console.log('Você ultrapassou a velocidade permitida!');
    } else {
        console.log('Dirija sempre usando cinto de segurança!');
    }

Reescrevendo o mesmo código usando o HTML e JavaScript:

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DETRAN</title>
        <style>
            body {
                font: normal 16pt Arial;
            }

            input {
                font: normal 16pt Arial;
            }
        </style>
    </head>
    <body>
        <h1>Sistema de Multas</h1>
        <div>
            Velocidade do carro: <input type="number" name="txtvel" id="txtvel"> km/h
            <input type="button" value="Verificar" onclick="calcular()">
        </div>
        <div id="resultado"></div>
        <script>
            function calcular(){
                const velocidade = Number(document.querySelector('input#txtvel').value);
                const resultado = document.querySelector('div#resultado');

                resultado.innerHTML = `<p>A sua velocidade é de <strong>${velocidade} km/h</strong>.</p>`

                if(velocidade > 60){
                    resultado.innerHTML += '<p>Você foi <strong>multado</strong> por excesso de velocidade!</p>'
                }

                resultado.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
            }

        </script>
    </body>
    </html>

Definindo nacionalidade no ambiente Node:

    let pais = 'EUA';

    if(pais === 'Brasil'){
        console.log('Você é brasileiro!');
    } else {
        console.log('Você é estrangeiro!');
    }

Definindo a nacionalidade no navegador:

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nacionalidade</title>
        <style>
            body {
                font: normal 16pt Arial;
            }

            input {
                font: normal 16pt Arial;
            }
        </style>
    </head>
    <body>
        <h1>Descobrindo a nacionalidade</h1>
        <div>
            <p>Qual país você nasceu? 
            <input type="text" name="txtpais" id="txtpais">
            <input type="button" value="Responder" onclick="responder()">
            </p>
        </div>
        <div id="resposta"></div>
        <script>
            function responder(){
                let pais = document.querySelector('input#txtpais');
                let resposta = document.querySelector('div#resposta');

                if(pais.value === 'Brasil'){
                    resposta.innerHTML = 'Você é brasileiro!';
                } else {
                    resposta.innerHTML = 'Você é estrangeiro!';
                }
            }
        </script>
    </body>
    </html>

**Nota**

Para capturar o valor dentro de um elemento *input* usamos a propriedade *.value*

---

## Capturando a hora do sistema
Vamos criar e estanciar um objeto que recebe a função *new Date()*, que armazena a hora e data completa do sistema.

    let agora = new Date();

Para manipular melhor podemos criar uma variável para cada dado que vamos trabalhar, dia, mês, ano, hora, minuto e segundo, para cada um temos uma função específica.

    getDate()     retorna o dia do mês de 1 a 31
    getDay()      retorna o dia da semana de 0 a 6
    getFullYear() retorna o ano com quatro dígitos a partir de 1900
    getHours()    retorna a hora do dia de 0 a 23
    getMinutes()  retorna os minutos de 0 a 59
    getMonth()    retorna o mês do ano de 0 a 11
    getSeconds()  retorna os segundos de 0 a 59
    getYear()     retorna de 0 a 99 para anos de 1900 a 1999 e com quatro dígitos para os anos adiante
    toGMTString() retorna em formato string data e hora GMT
    toLocaleString() a hora e data local em formato string
    toString()      data e hora local em formato string

Um exemplo de captura de hora do sistema no ambiente Nodejs:

    let agora = new Date();
    let hora = agora.getHours();

    console.log(agora.toLocaleString());

    if(hora >= 0 && hora < 5){
        console.log('Boa madrugada!');
    } else if(hora > 5 && hora < 12){
        console.log('Bom dia!');
    } else if (hora > 12 && hora < 18){
        console.log('Boa tarde!');
    } else {
        console.log('Boa noite!');
    }

---
### switch
A estrutura de seleção múltipla switch vai executar um bloco de comando de acordo com a condição da expressão determinada ou pode executar um bloco (padrão), caso nenhuma das condições satisfaça a expressão.
O switch só funciona com números inteiros e strings, ele é recomendado para variáveis sem intervalos, para dados com intervalos o if é mais adequado.

    switch(expressao){
        case valor1:
            bloco;
            break;

        case valor2:
            bloco;
            break;

        case valor3:
            bloco;
            break;

        default:
            bloco;
            break;
    }

É fundamental o uso do comando *break* ao fim de cada caso paa forçar o programa seguir o fluxo uma vez que a condição seja atendida.