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
    this.name = data.name;
    this.types = data.types;
    this.health = data.stats[0].base_stat;
    this.attack = data.stats[1].base_stat;
    this.defense = data.stats[2].base_stat;
    this.speed = data.stats[5].base_stat;
    this.weight = data.weight;
    this.height = data.height;
    this.imgFrontURL = data.sprites.front_default;
    this.imgBackURL = data.sprites.back_default;
  }

  get pokemonTypes() {
    // let dict = {
    // } 
    const types = this.types;
    let typeSpan = '';
    // @ts-ignore
    for (let i = 0; i < types.length; i++) {
      const foundType = types[i];
      typeSpan += `<span class="bg-teal text-light text-shadow rounded-pill py-2 px-3 me-2" title="${foundType.type.name}">${foundType.type.name}</span>`;
    }
    return typeSpan;
    // types[0].type.name
  }

  get pokemonCard() {
    return `
    <div  class="p-3 border border-red rounded-2">
      <h3 class="text-capitalize text-bg-dark fw-bold text-center fs-1">${this.name}</h3>
      <div class="d-flex justify-content-center">
        <img src="${this.imgFrontURL}" alt="${this.name} from Pokemon" class="poke-img">
        <img src="${this.imgBackURL}" alt="A picture of ${this.name} from behind" class="poke-img">
      </div>
      <div class="border border-teal rounded-2 text-teal fs-3 fw-bold p-3">
        <div class="mb-3 text-capitalize">
          ${this.pokemonTypes}
        </div>
        <hr class="my-1">
        <div class="d-flex justify-content-between">
          <p class="mb-0">Health:</p>
          <span>${this.health} hp</span>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-0">Attack:</p>
          <span>${this.attack} ap</span>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-0">Defense:</p>
          <span>${this.defense} dp</span>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-0">Speed:</p>
          <span>${this.speed} sp</span>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-0">Height:</p>
          <span>${this.height} ft.</span>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-0">Weight:</p>
          <span>${this.weight} lbs.</span>
        </div>
      </div>
    </div>
    `;
  }
}
