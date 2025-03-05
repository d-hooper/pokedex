import { AppState } from "../AppState.js";
import { Pokemon, WildPokemon } from "../models/WildPokemon.js";
import { pokedexApi } from "../utils/Axios.js"

class PokemonService {

  async getWildPokemon() {
    const response = await pokedexApi.get('pokemon')
    const retrievedPokemon = response.data.results.map(poke => new WildPokemon(poke))
    AppState.wildPokemon = retrievedPokemon
    console.log('getting pokemon', AppState.wildPokemon);
  }

  async getActivePokemon(pokemonName) {
    const response = await pokedexApi.get(`pokemon/${pokemonName}`)
    console.log('Active Pokemon', response.data);
    const activePokemon = new Pokemon(response.data)
    AppState.activePokemon = activePokemon
    console.log(activePokemon);
  }
}

export const pokemonService = new PokemonService()