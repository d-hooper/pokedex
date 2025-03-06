import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonController {

  constructor() {
    console.log('Sandbox Controller');
    AppState.on('identity', this.getSandboxPokemon)
  }

  drawSandboxPokemon() {

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