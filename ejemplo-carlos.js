fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(response => response.json())
.then(json => {
    console.log(json)
    return json;
})
.then(respuestaEnJson => {
    const types = respuestaEnJson.types;
    types.forEach(type => console.log('type -> ', type));
});
