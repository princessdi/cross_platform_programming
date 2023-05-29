import { Cooperation } from '../interfaces/Cooperation';
import { Country } from './Country';
import { GeographicalObject } from './GeographicalObject';

export class CountryCooperation
  extends GeographicalObject
  implements Cooperation
{
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
    return `Country Cooperation: ${this.name}, Number of Member Countries: ${this.memberCountries.length}`;
  }
}
