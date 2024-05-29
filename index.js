const inputPokemon = document.getElementById("inputPokemon");
const submitBtn = document.getElementById("submitBtn");
const body = document.body;

const typeColors = {
  fire: "#ff7402",
  grass: "#33a165",
  steel: "#00858a",
  water: "#0050ac",
  psychic: "#c90086",
  ground: "#c90086",
  ice: "#70deff",
  flying: "#5d4e75",
  ghost: "#4d5b64",
  normal: "normal",
  rock: "#6e1a00",
  fighting: "#634136",
  dark: "#272625",
  bug: "#6e1a00",
  dragon: "#00c431",
  electric: "#bba909",
  fairy: "#d31c81",
  unknown: "#757575",
  shadow: "#29292c",
};

const setBackgroundColor = (type) => {
  body.style.backgroundColor = typeColors[type] || "#121212";
};

const updateElementContent = (elementId, content) => {
  document.getElementById(elementId).textContent = content;
};

const updateElementStyle = (elementId, styleProperty, value) => {
  document.getElementById(elementId).style[styleProperty] = value;
};

const updateStats = (stats, statName, elementIdNumber, elementIdProgress) => {
  const stat = stats.find(stat => stat.stat.name === statName);
  updateElementContent(elementIdNumber, stat.base_stat);
  updateElementStyle(elementIdProgress, "width", `${stat.base_stat * 0.8}%`);
};

function fetchAndDisplayPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      const element = data.types[0].type.name;
      setBackgroundColor(element);

      updateElementContent("name", data.name.toUpperCase());
      document.getElementById("pokeImgFront").src = data.sprites.front_default;

      updateElementContent("height", `${data.height}m`);
      updateElementContent("weight", `${data.weight}kg`);
      updateElementContent("abilities", data.abilities[0].ability.name);

      const stats = data.stats;
      updateStats(stats, "hp", "hpNumber", "hpProgress");
      updateStats(stats, "defense", "defenseNumber", "defenseProgress");
      updateStats(stats, "attack", "attackNumber", "attackProgress");
      updateStats(stats, "special-defense", "specialDefenseNumber", "specialDefenseProgress");
      updateStats(stats, "special-attack", "specialAttackNumber", "specialAttackProgress");
      updateStats(stats, "speed", "speedNumber", "speedProgress");
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayPokemon("charizard");
});

submitBtn.addEventListener("click", () => {
  const inputPokemonValue = inputPokemon.value;
  fetchAndDisplayPokemon(inputPokemonValue);
});
