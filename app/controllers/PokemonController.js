import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"

export class PokemonController {

  constructor() {
    AppState.on('pokemon', this.drawPokemon)
    this.getPokemon()
  }

  drawPokemon() {
    const pokemon = AppState.pokemon
    let pokemonContent = ''
    const pokeListElm = document.getElementById('pokeList')
    pokemon.forEach(poke => pokemonContent += poke.pokemonList)
    pokeListElm.innerHTML = pokemonContent
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