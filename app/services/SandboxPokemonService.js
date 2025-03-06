import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js";

class SandboxPokemonService {
  async getSandboxPokemon() {
    console.log('getting sandbox pokemon');
    // const response = await api.get()

  }
  async catchPokemon() {
    const caughtPokemon = AppState.activePokemon
    const response = await api.post('api/pokemon', caughtPokemon)
    console.log(response.data);
    const caughtPokemonList = AppState.sandboxPokemon
  }

}

export const sandboxPokemonService = new SandboxPokemonService()