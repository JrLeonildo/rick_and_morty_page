const urlCharacters = "https://rickandmortyapi.com/api/character";
const urlLocatios = "https://rickandmortyapi.com/api/location";
const urlEpisodes = "https://rickandmortyapi.com/api/episode";
const loadingPage = document.querySelector(".loader");
const cardsContainer = document.querySelector("#cardsContainer");
const cardsCharactersContainer = document.querySelector("#cardsCharactersContainer");
const locationsContainer = document.querySelector("#locationsList");
const episodesContainer = document.querySelector("#episodesList");

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
  
  //charactersCards
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
      <h2 class="nameCharacter">${data.name}</h2>
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

  //locations list
  dataLocations.results.map((data) => {
    const locationsList = document.createElement("ul");
    locationsList.classList.add("locationsList");
    
    locationsList.innerHTML = `
    <li><span>name: </span>${data.name}</li>
    <li><span>type: </span>${data.type}</li>
    <li><span>dimension: </span>${data.dimension}</li>
    `
    locationsContainer.appendChild(locationsList);
  });

  //episodes list
  dataEpisodes.results.map((data) => {
    const episodesList = document.createElement("ul");
    episodesList.classList.add("episodesList");
    
    episodesList.innerHTML = `
    <li><span>name: </span>${data.name}</li>
    <li><span>date: </span>${data.air_date}</li>
    <li><span>episode: </span>${data.episode}</li>
    `
    episodesContainer.appendChild(episodesList);
  });
};

getAll();