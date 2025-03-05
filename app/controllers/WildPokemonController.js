import { AppState } from "../AppState.js"
import { pokemonService } from "../services/WildPokemonService.js"
import { Pop } from "../utils/Pop.js"

export class PokemonController {

  constructor() {
    AppState.on('wildPokemon', this.drawWildPokemon)
    AppState.on('activePokemon', this.drawActivePokemon)
    this.getWildPokemon()
  }

  drawWildPokemon() {
    const pokemon = AppState.wildPokemon
    let pokemonContent = ''
    const pokeListElm = document.getElementById('pokeList')
    pokemon.forEach(poke => pokemonContent += poke.wildPokemonList)
    pokeListElm.innerHTML = pokemonContent
  }

  drawActivePokemon() {
    const pokemon = AppState.activePokemon
    const activePokemonElm = document.getElementById('activePokemon')
    activePokemonElm.innerHTML = pokemon.pokemonCard
  }

  async getWildPokemon() {
    try {
      await pokemonService.getWildPokemon()
    } catch (error) {
      console.error('COULD NOT GET POKEMON', error)
      Pop.error(error, 'Could not retrieve Pokemon')
    }
  }

  async getActivePokemon(pokemonName) {
    try {
      await pokemonService.getActivePokemon(pokemonName)
    } catch (error) {
      console.error('COULD NOT GET ACTIVE POKEMON', error)
      Pop.error(error, 'Could not retrieve the selected Pokemon')
    }
  }
}