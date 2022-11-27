const BASE_URL_POKEMON_API = `https://pokeapi.co/api/v2/pokemon`;

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

  // Pokemon Info
  $("img").on("click", function () {
    let pokemonId = $(this).attr("id");

    $.get(
      `${BASE_URL_POKEMON_API}/${pokemonId}/`,

      function (res) {
        console.log(res);

        $("#name").html(
          `<h3 style="text-transform: capitalize">${res.name}</h3>`
        );
        $("#gif").html(
          `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif">`
        );
      },
      "json"
    );
  });
});
