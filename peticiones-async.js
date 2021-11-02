const pedirPokemons = async () => {
    try {
        const respuestaDelApi = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const respuestaEnJson = await respuestaDelApi.json();
        const resultados = respuestaEnJson.results;
        resultados.map((pokemon) => pokemon.name).forEach(nombre => {
            console.log(nombre);
        });
    } catch(error) {
        console.warn('Algo ha pasao', error);
    }
}

pedirPokemons();
