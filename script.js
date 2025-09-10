const poke_container = document.getElementById('poke-container');
const pokemon_count = 200;

const colors = {
    fire: '#EE8130',
    grass: '#7AC74C',
    water: '#6390F0',
    ground: '#E2BF65',
    ice: '#96D9D6',
    electric: '#F7D02C',
    rock: '#B6A136',
    fairy: '#D685AD',
    poison: '#A33EA1',
    bug: '#A6B91A',
    dragon: '#6F35FC',
    psychic: '#F95587',
    flying: '#A98FF3',
    fighting: '#C22E28',
    ghost: '#735797',
    dark: '#705746',
    steel: '#B7B7CE',
    normal: '#A8A77A'
}

const main_types = Object.keys(colors);

const fetchPokemons =async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
};

const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/${id}'
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
};