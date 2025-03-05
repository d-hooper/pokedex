import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"

export class PokemonController {

  constructor() {
    this.getPokemon()
  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      console.error('COULD NOT GET POKEMON', error)
      Pop.error(error, 'Could not retrieve Pokemon')
    }
  }
}