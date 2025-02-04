# Consumo_API
Consumo de API com Fetch em JavaScript.
Código realizado pelos vídeos do YouTube do canal do Gustavo Caetano.
Projeto prático realizado com JavaScript puro a fim de estudar conceitos como Promises, Async/Await, HOF(High Order Functions), filtragem e manipulação de dados de uma API, validação de formulário, assim como a criação de elementos HTML(DOM) e propriedades CSS dinâmicamente.

## Link da playlist das aulas e do canal do Gustavo
* https://youtu.be/kbuLUcloSfY?si=aESLC7RKaRWIo0xQ
* https://www.youtube.com/@oguscaetano

## Observações de código: 
Método JSON.stringify - parâmetros
O método JSON.stringify(data, undefined, 2) melhora a formatação do JSON para torná-lo mais legível no HTML. O parâmetro undefined mantém os dados sem alterações, e o 2 define a indentação com dois espaços, organizando o JSON com quebras de linha e recuos, facilitando a leitura.

 * imagem.setAttribute("src", data.image), tem a mesma função que imagem.src = `${data.image}`;

* .join("\r\n") = pega todos os elementos do array  e junta-os em uma única string, separando cada elemento por uma quebra de linha no formato Windows (\r\n). No caso, substitui "\r\n" para "<br>", assim, a quebra de linha é exibida no HTML.

* Para a validação dos checkbox criados dinâmicamente dentro da função buildResult(), foi necessário criar uma nova variável dentro do addEventListener selecionando todos elementos que possuem o ID igual ao elemento do array 'keys' e filtrando cada um deles quando forem selecionados, no final ao utilizar o método '.length' conseguimos perceber quantos elementos foram selecionados. Se o resultado for 0, quer dizer que nenhum foi selecionado, logo é exibido uma mensagem para o usuário selecionar pelo menos um campo do checkbox. Abaixo a linha de código que é responsável por isso: <br>
```
const checkedElements = keys.map((key) => document.getElementById(key))                         .filter((element) => element.checked === true);

if (checkedElements.length === 0) {
    window.alert("Selecione pelo menos um checkbox antes de buscar.");
    return;}```