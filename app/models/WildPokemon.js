

export class WildPokemon {

  constructor(data) {
    this.name = data.name
  }

  get wildPokemonList() {
    return `
    <button onclick="app.pokemonController.getActivePokemon('${this.name}')" class="btn btn-dark text-teal text-capitalize text-start fw-bold w-100">
      <span class="mdi mdi-pokeball"></span>
      ${this.name}
    </button>
    `
  }
}

export class Pokemon {

  constructor(data) {
    this.name = data.name
    // this.type = data.
    // this.health = data.
    // this.attack = data.
    // this.defense = data.
    // this.speed = data.
    // this.weight = data.
    // this.height = data.
  }

  get pokemonList() {
    return `
    
    `
  }
}

