// const rootElement = document.getElementById('root');

// const buildPokemonPage = (listaDePokemons) => `<div>
//     <h1>Listado de pokemons</h1>
//     <ol>
//         ${listaDePokemons.map((pokemon) => `<li>${pokemon.name}</li>`).join('')}
//     </ol>
// </div>`;

// root.innerHTML = '<h3>Loading ...</h3>';

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then((respuestaDelApi) => {
//         return respuestaDelApi.json()
//     })
//     .then((respuestaEnJson) => {
//         return respuestaEnJson.results;
//     })
//     .then(resultados => {
//         root.innerHTML = buildPokemonPage(resultados);
//     });

// console.log('Finalizado script');

////////////////////////////////////////////////////////////////////////////////
// fetch('https://pokeapi.co/api/v2/pokemon/') // Promesa1
//     .then((respuestaDelApi) => {
//         return respuestaDelApi.json()
//     }) // Promesa2
//     .then((respuestaEnJson) => {
//         return respuestaEnJson.results;
//     }) // Promesa3
//     .then((resultados) => {
//         return resultados.map((pokemon) => pokemon.name);
//     })//Promesa 4
//     .then((nombresPokemon) => {
//         nombresPokemon.forEach(nombre => {
//             console.log(nombre);
//         });
//     }); // proemsa 5

fetch('https://pokeapi.co/api/v2/pokemon/') // Promesa1
    .then((respuestaDelApi) => {
        return respuestaDelApi.json()
    }) // Promesa2
    .then((respuestaEnJson) => {
        const resultados = respuestaEnJson.results;
        return resultados.map((pokemon) => pokemon.name).forEach(nombre => {
            console.log(nombre);
        });
    }) // Promesa3
