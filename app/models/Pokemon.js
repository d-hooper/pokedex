

export class Pokemon {

  constructor(data) {
    this.name = data.name
  }

  get pokemonList() {
    return `
    <button class="btn btn-dark text-teal text-capitalize text-start fw-bold w-100">
      <span class="mdi mdi-pokeball"></span>
      ${this.name}
    </button>
    `
  }
}