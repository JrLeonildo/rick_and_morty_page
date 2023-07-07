const url = "https://rickandmortyapi.com/api/character";
const loadingPage = document.querySelector(".loader");
const charactersContainer = document.querySelector("#charactersContainer");

async function getAllCharacters() {
  const response = await fetch(url); // response
  const data = await response.json(); // converting to json
  
  loadingPage.classList.remove("loader"); // removing the loading
  loadingPage.classList.add("hide"); 
  console.log(data.results);
  
  data.results.map((data) => {

    const divCharacterContainer = document.createElement("div");
    divCharacterContainer.classList.add("CharactersCard");
    divCharacterContainer.innerHTML = `
    <div class="imgContainer">
      <img src="${data.image}" alt="image of ${data.name}" title="image of ${data.name}">
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
    charactersContainer.appendChild(divCharacterContainer);
  
  });
};

getAllCharacters();