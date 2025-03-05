import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { WildPokemon } from './models/WildPokemon.js'
import { Pokemon } from "./models/Pokemon.js"
import { Identity } from './Auth/Identity.js'

class ObservableAppState extends EventEmitter {

  /** @type { Identity }*/
  identity = null

  /** @type { WildPokemon[] }*/
  wildPokemon = []

  /** @type { Pokemon }*/
  activePokemon = null



}

export const AppState = createObservableProxy(new ObservableAppState())