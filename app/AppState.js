import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { WildPokemon } from './models/WildPokemon.js'
import { Pokemon } from './models/WildPokemon.js'

class ObservableAppState extends EventEmitter {


  /** @type { WildPokemon[] }*/
  wildPokemon = []

  /** @type { Pokemon }*/
  activePokemon = null

}

export const AppState = createObservableProxy(new ObservableAppState())