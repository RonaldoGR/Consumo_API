
const characterId = document.querySelector('input#characterId');
const button = document.querySelector('button#btn-go');
const limpar = document.querySelector('button#clear');
const content = document.querySelector('pre#content');
const imagem = document.querySelector('img#img');



const  fetchApi = async (id) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    console.log("PERSONAGEM: ", data);
    content.innerHTML = '';
    imagem.setAttribute("src", data.image);
    return  JSON.stringify(data, undefined, 2);
    // const { name, species, status, gender } = data;
    // return content.innerHTML += `<p> Nome: ${name}\n Espécie: ${species}\n Status: ${status}\n Sexo: ${gender}</p>`
  } catch (error) {
    console.error("ERROR: ", error);
  }
};



button.addEventListener('click',  async (event) => {
  event.preventDefault();
  const result =  await fetchApi(characterId.value);
  return content.textContent = `${result}`;
  
});

limpar.addEventListener('click', (event) => {
  event.preventDefault();
  characterId.value = '';
  imagem.setAttribute('src', '');
  characterId.focus();
  return content.innerHTML = '';
})