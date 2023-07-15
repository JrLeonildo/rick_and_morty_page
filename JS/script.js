const urlCharacters = "https://rickandmortyapi.com/api/character";
const urlLocatios = "https://rickandmortyapi.com/api/location";
const urlEpisodes = "https://rickandmortyapi.com/api/episode";
const loadingPage = document.querySelector(".loader");
const cardsContainer = document.querySelector("#cardsContainer");
const headerCharactersContainer = document.querySelector("#headerCharactersContainer");

async function getAll() {
  const [responseChracter, responseLocations, responseEpisodes] = await Promise.all([
    fetch(urlCharacters), // response characters
    fetch(urlLocatios), //response locations
    fetch(urlEpisodes) //response episodes 
  ])
  // converting to json
  const dataCharacters = await responseChracter.json();
  const dataLocations = await responseLocations.json();
  const dataEpisodes = await responseEpisodes.json();  

  console.log(dataCharacters, dataLocations, dataEpisodes)
  
  // removing the loading
  loadingPage.classList.remove("loader"); 
  loadingPage.classList.add("hide"); 

  const createDiv = document.createElement("div");
  createDiv.innerHTML = `
    <h2>Characters</h2>
  `;
  headerCharactersContainer.appendChild(createDiv);
  
  dataCharacters.results.map((data) => {

    const divCharacterContainer = document.createElement("div");
    divCharacterContainer.classList.add("CharactersCard");
    divCharacterContainer.innerHTML = `
    <div class="imgContainer">
      <img 
        src="${data.image}" 
        alt="${data.name} image" 
        title="${data.name} image"
      >
    </div>
    <div class="nameCharacterContainer">
      <h3 class="nameCharacter">${data.name}</h3>
    </div>
    <div class="dataContainer">
      <ul>
        <li>${data.species}</li> 
        <li>${data.status}</li>
      </ul>
    </div>
    `;
    cardsContainer.appendChild(divCharacterContainer);
  
  });
};

getAll();