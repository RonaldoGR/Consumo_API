const characterId = document.querySelector('input#characterId');
const button = document.querySelector('button#btn-go');
const limpar = document.querySelector('button#clear');
const content = document.querySelector('div#content');
const imagem = document.querySelector('img#img');
const containerResult = document.querySelector('div#result-style');


const  fetchApi = async (id) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();  
    return data;
  } catch (error) {
    console.error("ERROR: ", error);
  }
};


const keys = ['name', 'status','species' ,'gender','origin', 'location', 'episode'];

const newKeys = {
    name: 'Nome',
    status: 'Status',
    species: 'Espécie',
    gender: 'Gênero',
    origin: 'Planeta de origem',
    location: 'Localização atual',
    episode: 'Episódio(s)',
}


const buildResult = (result) => {
   content.innerHTML = '';
       return  keys.map((key) => document.getElementById(key))
            .map((element) => {
                if (element.checked === true && (Array.isArray(result[element.name]) === true )){
                    const arrayResult = result[element.name].join('<br>');
                    const newElement = document.createElement('p');
                    newElement.innerHTML = `<strong>${newKeys[element.name]}</strong>: <br>${arrayResult}`;
                    content.appendChild(newElement);
                }
                else if (element.checked === true && typeof(result[element.name]) === 'object'){
                    const newElement = document.createElement('p');
                    newElement.innerHTML = `<strong>${newKeys[element.name]}</strong>: ${result[element.name].name}`;
                    content.appendChild(newElement);
                }
                
                else if (element.checked === true && typeof(result[element.name]) !== 'object'){
                    const newElement = document.createElement('p');
                    newElement.innerHTML = `<strong>${newKeys[element.name]}</strong>: ${result[element.name]}`;
                    content.appendChild(newElement);
                }
             })   
};

button.addEventListener('click',  async (event) => {
  event.preventDefault();

  if (characterId.value === '' || characterId.value <= 0 || characterId.value != parseInt(characterId.value)) {
    window.alert("Preencha o ID da personagem para continuar. \nSomente valores inteiros e positivos");
    return;
  } 

    const checkedElements = keys.map((key) => document.getElementById(key))
                            .filter((element) => element.checked === true);

    if (checkedElements.length === 0) {
    window.alert("Selecione pelo menos um checkbox antes de buscar.");
    return;
    }

    const result =  await fetchApi(characterId.value);
    buildResult(result);
    containerResult.className = 'result-style';
    imagem.src = `${result.image}`; 
});

limpar.addEventListener('click', () => {
  // location.reload()   -> limpa, mas atualiza a página inteira;
  imagem.setAttribute('src', '');
  containerResult.className = '';
  characterId.focus();
  return content.innerHTML = '';
})