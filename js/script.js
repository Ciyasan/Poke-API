//Récupération de l'Id du pokémon\\
let params = new URL(document.location).searchParams;
let id = parseInt(params.get("id"));
//Récupération des informations du pokémon dans l'API et affichage des données du pokémon dans la page HTML\\
let url = "https://pokeapi.co/api/v2/pokemon/" + id;
function xhrListener() {
  let pokemon = JSON.parse(xhr.responseText);
  //Nom du pokémon\\
  let name = pokemon.name;
  let pokename = document.getElementById("name");
  pokename.textContent = name;
  //Image du pokémon\\
  let pokeimg = document.getElementById("img");
  pokeimg.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    id +
    ".png";
  //Id du pokémon\\
  let pokeid = document.getElementById("id");
  pokeid.textContent = "Id du pokémon : " + id;
  //Hauteur du pokemon\\
  let height = pokemon.height;
  let pokeheight = document.getElementById("height");
  pokeheight.textContent = "Hauteur du pokémon : " + height;
  //Poids du pokémon\\
  let weight = pokemon.weight;
  pokeweight = document.getElementById("weight");
  pokeweight.textContent = "Poids du pokémon : " + weight;
  //Espèce du pokémon\\
  let species = pokemon.species.name;
  let pokespecies = document.getElementById("species");
  pokespecies.textContent = "Espèce du pokémon : " + species;
}
//Requète Ajax\\
const xhr = new XMLHttpRequest();
xhr.onload = xhrListener;
xhr.open("get", url, true);
const result = xhr.send();
