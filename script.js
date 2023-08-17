//Variáveis globais
const pokemonName = document.querySelector('#nome');
const pokemonNumber = document.querySelector('#numero');
const pokemonImage = document.querySelector('#pokemon');

//Funções
//Traz o objeto do pokemon informado da API
const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

//Renderiza os dados no HTML
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}


renderPokemon('20');