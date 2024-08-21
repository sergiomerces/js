![Introdução ao JavaScript](https://hermes.dio.me/articles/cover/1caddefa-9a2d-4d9e-aa3d-d71661d9af6d.jpg)

# 📝 Curso de JavaScript 

Notas de aula, exemplos e exercícios do [Curso de JavaScript](https://www.cursoemvideo.com/curso/javascript/) do [Curso em Video](http://www.cursoemvideo.com) com o **Gustavo Guanabara**.

---
## Criando um arquivo HTML
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
## Caixas de mensagens no navegador

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

parei na aula 05
