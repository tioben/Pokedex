//Variáveis globais
const pokemonName = document.querySelector('#nome');
const pokemonNumber = document.querySelector('#numero');
const pokemonImage = document.querySelector('#pokemon');
const form = document.querySelector('#form');
const input = document.querySelector('#barra-pesquisa')
const buttonNext = document.querySelector('#next')
const buttonPrev = document.querySelector('#prev')
let pokemonID = 1;

//Funções
//Traz o objeto do pokemon informado da API
const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIresponse.status == 200){
        const data = await APIresponse.json();
        return data;
    }
}

//Renderiza os dados no HTML
const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Loading...";
    pokemonNumber.innerHTML = '';
    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value='';
        pokemonID = data.id;
    } else{
        pokemonName.innerHTML = "Not Found :c";
        pokemonNumber.innerHTML = '';
        input.value='';
        pokemonImage.style.display = 'none';
    }
}

//Passa os dados da input para a funcao render após o formulário ser enviado [submit]
form.addEventListener('submit', (event)=>
{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

//Botões [next] e [prev]
buttonNext.addEventListener('click', ()=>{
    pokemonID += 1;
    renderPokemon(pokemonID);
});

buttonPrev.addEventListener('click', ()=>{
    if (pokemonID > 1){
        pokemonID -= 1;
        renderPokemon(pokemonID);
    }
});

renderPokemon(pokemonID);

