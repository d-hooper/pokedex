import { AuthController } from "./Auth/AuthController.js"
import { PokemonsController } from "./controllers/PokemonsController.js"

class App {
  
  authController = new AuthController()

  pokemonsController = new PokemonsController()

}

window['app'] = new App()


