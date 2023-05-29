import { GeographicalObject } from './GeographicalObject';

export class Island extends GeographicalObject {
  constructor(name: string, area: number, population: number) {
    super(name, area, population);
  }

  getDescription(): string {
    return `Island: ${this.name}, Area: ${this.area} sq km, Population: ${this.population}`;
  }
}
