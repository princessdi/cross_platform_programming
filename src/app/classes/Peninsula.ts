import { GeographicalObject } from './GeographicalObject';

export class Peninsula extends GeographicalObject {
  constructor(name: string, area: number, population: number) {
    super(name, area, population);
  }

  getDescription(): string {
    return `Peninsula: ${this.name}, Area: ${this.area} sq km, Population: ${this.population}`;
  }
}
