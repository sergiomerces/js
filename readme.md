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
