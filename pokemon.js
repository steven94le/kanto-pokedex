$(document).ready(function () {
  function pokemonStyle() {
    $("img").css("background-color", "darkgray");
    $("img").addClass("m-1");
  }

  // Display 151 Pokemon
  for (let i = 1; i <= 151; i++) {
    $(".pokemons").append(
      `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" id="${i}">`
    );
    pokemonStyle();
  }
});
