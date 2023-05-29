import { GeographicalObject } from './GeographicalObject';

export class Continent extends GeographicalObject {
  constructor(name: string, area: number, population: number) {
    super(name, area, population);
  }

  getDescription(): string {
    return `Continent: ${this.name}, Area: ${this.area} sq km, Population: ${this.population}`;
  }
}
