import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokedexApi } from "../utils/Axios.js"

class PokemonService {
  async getPokemon() {
    const response = await pokedexApi.get('pokemon')
    const retrievedPokemon = response.data.results.map(poke => new Pokemon(poke))
    AppState.pokemon = retrievedPokemon
    console.log('getting pokemon', AppState.pokemon);
  }

}

export const pokemonService = new PokemonService()