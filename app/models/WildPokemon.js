

export class WildPokemon {

  constructor(data) {
    this.name = data.name
  }

  get wildPokemonList() {
    return `
    <button onclick="app.pokemonController.getActivePokemon('${this.name}')" class="btn btn-dark text-teal text-capitalize text-start fs-5 fw-bold w-100">
      <span class="mdi mdi-pokeball"></span>
      ${this.name}
    </button>
    `
  }
}

export class Pokemon {

  /**
   * @param {{ 
   * name: string;
   * types: array; 
   * stats: { 
   * base_stat: number; 
   *  }[]; 
   * weight: number; 
   * height: number; 
   * sprites: { 
   *  front_default: string; 
   *  back_default: string; 
   *  }; 
   * }} data
   */
  constructor(data) {
    this.name = data.name
    this.types = data.types
    this.health = data.stats[0].base_stat
    this.attack = data.stats[1].base_stat
    this.defense = data.stats[2].base_stat
    this.speed = data.stats[5].base_stat
    this.weight = data.weight
    this.height = data.height
    this.imgFrontURL = data.sprites.front_default
    this.imgBackURL = data.sprites.back_default
  }

  get pokemonTypes() {
    // let dict = {

    // } 

    const types = this.types
    // @ts-ignore
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      return type.name
    }

  }

  get pokemonCard() {
    return `
    
    `
  }
}

