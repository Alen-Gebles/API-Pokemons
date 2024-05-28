const inputPokemon = document.getElementById("inputPokemon");
const submitBtn = document.getElementById("submitBtn");


submitBtn.addEventListener("click", () =>{
  const inputPokemonValue = inputPokemon.value;

  fetch(` https://pokeapi.co/api/v2/pokemon/${inputPokemonValue}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("name").textContent = data.name.toUpperCase();
    document.getElementById("pokeImgFront").src = data.sprites.front_default;
    document.getElementById("pokeImgBack").src = data.sprites.back_default;

    // Find the HP base stat
    const hpStat = data.stats.find(stat => stat.stat.name === "hp");
    document.getElementById("hpNumber").textContent = hpStat.base_stat;
    document.getElementById("hpProgress").style.width = `${hpStat.base_stat}%`;

    // Find the DEFENSE base stat
    const defenseStat = data.stats.find(stat => stat.stat.name === "defense");
    document.getElementById("defenseNumber").textContent = defenseStat.base_stat;
    document.getElementById("defenseProgress").style.width = `${defenseStat.base_stat}%`;

    // Find the ATTACK base stat
    const attackStat = data.stats.find(stat => stat.stat.name === "attack");
    document.getElementById("attackNumber").textContent = attackStat.base_stat;
    document.getElementById("attackProgress").style.width = `${attackStat.base_stat}%`;

    // Find the SPECIAL DEFENSE base stat
    const specialDefenseStat = data.stats.find(stat => stat.stat.name === "special-defense");
    document.getElementById("specialDefenseNumber").textContent = specialDefenseStat.base_stat;
    document.getElementById("specialDefenseProgress").style.width = `${specialDefenseStat.base_stat}%`;
  
    // Find the SPECIAL ATTACK base stat
    const specialAttackStat = data.stats.find(stat => stat.stat.name === "special-attack");
    document.getElementById("specialAttackNumber").textContent = specialAttackStat.base_stat;
    document.getElementById("specialAttackProgress").style.width = `${specialAttackStat.base_stat}%`;
  
    // Find the SPEED base stat
    const speedStat = data.stats.find(stat => stat.stat.name === "speed");
    document.getElementById("speedNumber").textContent = speedStat.base_stat;
    document.getElementById("speedProgress").style.width = `${speedStat.base_stat}%`;
  })
  .catch(error => console.error('Error:', error));
})