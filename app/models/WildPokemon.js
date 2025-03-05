

export class WildPokemon {

  constructor(data) {
    this.name = data.name
  }

  get wildPokemonList() {
    return `
    <button onclick="app.pokemonController.getActivePokemon('${this.name}')" class="btn btn-dark text-teal text-capitalize text-start fs-5 fw-bold w-100" title="${this.name}" type="button">
      <span class="mdi mdi-pokeball"></span>
      ${this.name}
    </button>
    `
  }
}

export class SandboxPokemon extends WildPokemon {
  constructor(data) {
    super(data);
    
  }


  get sandboxPokemonList() {
    return `
      <input type="checkbox" class="me-1">
      <button class="btn btn-teal fs-5 text-capitalize text-start fw-bold w-100">
        <span class="mdi mdi-pokeball"></span>
          Bulbasaur
      </button>
    `
  }
}