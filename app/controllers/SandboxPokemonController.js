import { Pop } from "../utils/Pop.js";

export class SandboxPokemonController {

  constructor() {
    console.log('Sandbox Controller');
  }

  drawSandboxPokemon() {

  }

  getSandboxPokemon() {

  }

  async savePokemon(pokemonName) {
    try {
      console.log('saving pokemon', pokemonName);
    } catch (error) {
      console.error(error, 'COULD NOT SAVE POKEMON');
      Pop.error(error, 'Could not save the selected Pokemon')
      
    }
  }
}