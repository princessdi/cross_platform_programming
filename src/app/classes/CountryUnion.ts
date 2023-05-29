import { Union } from '../interfaces/Union';
import { Country } from './Country';
import { GeographicalObject } from './GeographicalObject';

export class CountryUnion extends GeographicalObject implements Union {
  constructor(public override name: string, public memberCountries: Country[]) {
    super(name, 0, 0);
  }

  getName(): string {
    return this.name;
  }

  getMemberCountries(): Country[] {
    return this.memberCountries;
  }

  getDescription(): string {
    return `Country Union: ${this.name}, Number of Member Countries: ${this.memberCountries.length}`;
  }
}
