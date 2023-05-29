import { Territory } from '../interfaces/Territory';

export abstract class GeographicalObject implements Territory {
  constructor(
    public name: string,
    public area: number,
    public population: number
  ) {}

  getArea(): number {
    return this.area;
  }

  getPopulation(): number {
    return this.population;
  }

  abstract getDescription(): string;
}
