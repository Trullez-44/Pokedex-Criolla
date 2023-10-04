let url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
let div_cards = document.getElementById('listaPokemon')
const insertHTML =(img, name, id)=>{
        return  `
            <div class="pokemon">
                <p class="pokemon-id-back">${id}</p>
                <div class="pokemon-imagen">
                    <img src=${img}
                        alt="${name }">
                </div>
                <div class="pokemon-info">
                    <div class="nombre-contenedor">
                        <p class="pokemon-id">${id}</p>
                        <button class="prueba">${name}</button>
                    </div>
                </div>
            </div>
        `
}
export const upload = async(res_data)=>{
    res_data.results.forEach(async element=> {
        let e = await (await fetch(element.url)).json();
        // console.log(e.sprites.front_default, e.name, e.id);
        let card = await(insertHTML(e.sprites.front_default, e.name, e.id));
        div_cards.innerHTML +=card
    });
}
export const load = async (upload)=>{
    let res= await (await fetch(url)).json();
    await (upload(res));
}
    