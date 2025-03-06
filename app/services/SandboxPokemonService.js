import { AppState } from "../AppState.js";
import { SandboxPokemon } from "../models/WildPokemon.js";
import { api } from "../utils/Axios.js";

class SandboxPokemonService {
  async getSandboxPokemon() {
    console.log('getting sandbox pokemon');
    const response = await api.get('api/pokemon')
    console.log(response.data);
    const caughtPokemonList = response.data.map(poke => new SandboxPokemon(poke))
    AppState.sandboxPokemon = caughtPokemonList

  }
  async catchPokemon() {
    const caughtPokemon = AppState.activePokemon
    const response = await api.post('api/pokemon', caughtPokemon)
    console.log(response.data);
    
  }

}

export const sandboxPokemonService = new SandboxPokemonService()