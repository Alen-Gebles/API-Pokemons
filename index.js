const inputPokemon = document.getElementById("inputPokemon");
const submitBtn = document.getElementById("submitBtn");
const body = document.body;

function fetchAndDisplayPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const element = data.types[0].type.name;

      switch (element) {
        default: body.style.backgroundColor = "#121212"; break;
        case 'fire': body.style.backgroundColor = "#ff7402"; break;
        case 'grass': body.style.backgroundColor = "#33a165"; break;
        case 'steel': body.style.backgroundColor = "#00858a"; break;
        case 'water': body.style.backgroundColor = "#0050ac"; break;
        case 'psychic': body.style.backgroundColor = "#c90086"; break;
        case 'ground': body.style.backgroundColor = "#c90086"; break;
        case 'ice': body.style.backgroundColor = "#70deff"; break;
        case 'flying': body.style.backgroundColor = "#5d4e75"; break;
        case 'ghost': body.style.backgroundColor = "#4d5b64"; break;
        case 'normal': body.style.backgroundColor = "normal"; break;
        case 'rock': body.style.backgroundColor = "#6e1a00"; break;
        case 'fighting': body.style.backgroundColor = "#634136"; break;
        case 'dark': body.style.backgroundColor = "#272625"; break;
        case 'bug': body.style.backgroundColor = "#6e1a00"; break;
        case 'dragon': body.style.backgroundColor = "#00c431"; break;
        case 'electric': body.style.backgroundColor = "#bba909"; break;
        case 'fairy': body.style.backgroundColor = "#d31c81"; break;
        case 'unknow': body.style.backgroundColor = "#757575"; break;
        case 'shadow': body.style.backgroundColor = "#29292c"; break;
      }

      document.getElementById("name").textContent = data.name.toUpperCase();
      document.getElementById("pokeImgFront").src = data.sprites.front_default;

      // Poke Stats
      document.getElementById("height").textContent = `${data.height}m`;
      document.getElementById("weight").textContent = `${data.weight}kg`;
      document.getElementById("abilities").textContent = data.abilities[0].ability.name;

      // HP base stat
      const hpStat = data.stats.find(stat => stat.stat.name === "hp");
      document.getElementById("hpNumber").textContent = hpStat.base_stat;
      document.getElementById("hpProgress").style.width = `${hpStat.base_stat * 0.8}%`;

      // DEFENSE base stat
      const defenseStat = data.stats.find(stat => stat.stat.name === "defense");
      document.getElementById("defenseNumber").textContent = defenseStat.base_stat;
      document.getElementById("defenseProgress").style.width = `${defenseStat.base_stat * 0.8}%`;

      // ATTACK base stat
      const attackStat = data.stats.find(stat => stat.stat.name === "attack");
      document.getElementById("attackNumber").textContent = attackStat.base_stat;
      document.getElementById("attackProgress").style.width = `${attackStat.base_stat * 0.8}%`;

      // SPECIAL DEFENSE base stat
      const specialDefenseStat = data.stats.find(stat => stat.stat.name === "special-defense");
      document.getElementById("specialDefenseNumber").textContent = specialDefenseStat.base_stat;
      document.getElementById("specialDefenseProgress").style.width = `${specialDefenseStat.base_stat * 0.8}%`;

      // SPECIAL ATTACK base stat
      const specialAttackStat = data.stats.find(stat => stat.stat.name === "special-attack");
      document.getElementById("specialAttackNumber").textContent = specialAttackStat.base_stat;
      document.getElementById("specialAttackProgress").style.width = `${specialAttackStat.base_stat * 0.8}%`;

      // SPEED base stat
      const speedStat = data.stats.find(stat => stat.stat.name === "speed");
      document.getElementById("speedNumber").textContent = speedStat.base_stat;
      document.getElementById("speedProgress").style.width = `${speedStat.base_stat * 0.8}%`;
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayPokemon(charizard);
});

submitBtn.addEventListener("click", () => {
  const inputPokemonValue = inputPokemon.value;
  fetchAndDisplayPokemon(inputPokemonValue);
});
