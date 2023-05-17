const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
  };
  
  const pokeInfo = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map((item) => item.ability.name);
    pokeAbilities.innerHTML = abilitiesName;
  };
  
  const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("../images/pokemon-sad.gif");
      } else {
        return res.json();
      }
    });
  
    if (data) {
      console.log(data);
      let pokeImg = data.sprites.front_default;
      let pokeAbilities = data.abilities;
      pokeImage(pokeImg);
      pokeInfo(pokeAbilities);
      console.log(pokeImg);
    }
  };