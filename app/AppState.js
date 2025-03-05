import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Pokemon } from './models/Pokemon.js'

class ObservableAppState extends EventEmitter {


  /** @type { Pokemon[] }*/
  pokemon = []

}

export const AppState = createObservableProxy(new ObservableAppState())