import { pokedexApi } from "../utils/Axios.js"

class PokemonsService {
  async getPokemon() {
    const response = await pokedexApi.get('pokemon')
    console.log('getting pokemon', response.data);
  }

}

export const pokemonsService = new PokemonsService()