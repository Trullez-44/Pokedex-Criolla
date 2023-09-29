import {load, upload} from './modules/load.js'

load(upload);

let my_button = document.querySelector("#prueba");
var root = document.documentElement;
var miVariableCSS = getComputedStyle(root).getPropertyValue('--electric');
const url = "https://pokeapi.co/api/v2/pokemon";
my_button.addEventListener("click", async () => {
  
  let call = await (await fetch(url+"/9"/*EL ENDPOINT ES EL NOMBRE O ID DEL POKEMON */)).json();
  let pokemon_image = call.sprites["front_default"];
  let imagen_suplente ="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs";
  // console.log(call.stats[0].stat.name);
  Swal.fire({
    title: `
        ${call.species["name"].toUpperCase()}`,
    text: "descripción makia",
    imageUrl: pokemon_image ? pokemon_image : imagen_suplente,
    imageWidth: "65%",
    imageHeight: "85%",
    showConfirmButton: false, 
    html: `<style>
    #swal2-title{
      color:${miVariableCSS}
    }
    </style>
    <form id="div_">
        ${call.stats
          .map((iterador) => {
            return `<div data-name="${iterador.stat.name}"><p class="inputs" data-name="${iterador.stat.name}">
            ${iterador.base_stat} ${iterador.stat.name.toUpperCase()}</p>
            <input type="range" max="200" value="${iterador.base_stat}" name="${iterador.stat.name}">
              </div>`;
          })
          .join("")}
        </form>
        <input type="submit" value="SEND INFO" form="div_">`,
    imageAlt: "Pokemon Image",
  });
  let container = document.querySelector("#cards");
  container.addEventListener("click", (e)=>{
    if(e.target.matches("click")){
        let mystats =(e.target.parentNode.children[0]);
        mystats.innerHTML = ` ${e.target.value} ${mystats.dataset.name.toUpperCase()}`
    }
  })
});