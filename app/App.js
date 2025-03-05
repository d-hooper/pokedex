import { AuthController } from "./Auth/AuthController.js"
import { PokemonController } from "./controllers/WildPokemonController.js"

class App {
  
  authController = new AuthController()

  pokemonController = new PokemonController()

}

window['app'] = new App()


