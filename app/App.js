import { AuthController } from "./Auth/AuthController.js"
import { SandboxPokemonController } from "./controllers/SandboxPokemonController.js"
import { WildPokemonController } from "./controllers/WildPokemonController.js"

class App {
  
  authController = new AuthController()

  wildPokemonController = new WildPokemonController()

  sandboxPokemonController = new SandboxPokemonController()

}

window['app'] = new App()


