import { pokemonsService } from "../services/PokemonsService.js"
import { Pop } from "../utils/Pop.js"

export class PokemonsController {

  constructor() {
    this.getPokemon()
  }

  async getPokemon() {
    try {
      await pokemonsService.getPokemon()
    } catch (error) {
      console.error('COULD NOT GET POKEMON', error)
      Pop.error(error, 'Could not retrieve Pokemon')
    }
  }
}