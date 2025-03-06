import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonController {

  constructor() {
    console.log('Sandbox Controller');
    AppState.on('identity', this.getSandboxPokemon)
    AppState.on('sandboxPokemon', this.drawSandboxPokemon)
  }

  drawSandboxPokemon() {
    const sandboxPokemon = AppState.sandboxPokemon
    let sandboxListContent = ''
    const sandboxPokemonElm = document.getElementById('sandboxPokemon')
    sandboxPokemon.forEach(pokemon => sandboxListContent += pokemon.sandboxPokemonButton)
    sandboxPokemonElm.innerHTML = sandboxListContent
  }

  async getSandboxPokemon() {
    try {
      await sandboxPokemonService.getSandboxPokemon()
    } catch (error) {
      console.error(error, 'COULD NOT GET YOUR POKEMON');
      Pop.error(error, 'Could not retrieve your saved Pokemon')
      
    }
  }

  async savePokemon() {
    try {
      await sandboxPokemonService.catchPokemon()
    } catch (error) {
      console.error(error, 'COULD NOT SAVE POKEMON');
      Pop.error(error, 'Could not save the selected Pokemon')
      
    }
  }
}