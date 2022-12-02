fetch("https://pokeapi.co/api/v2/pokemon/buizel")
    .then(res => res.json())
    .then(data => console.log(data))
