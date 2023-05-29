import { Territory } from '../interfaces/Territory';
import { GeographicalObject } from './GeographicalObject';

export class Country extends GeographicalObject implements Territory {
  constructor(
    public override name: string,
    public override area: number,
    public override population: number
  ) {
    super(name, area, population);
  }

  override getArea(): number {
    return this.area;
  }

  override getPopulation(): number {
    return this.population;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return `Country: ${this.name}, Area: ${this.area} sq km, Population: ${this.population}`;
  }
}
