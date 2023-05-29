import { Country } from '../classes/Country';

export interface Cooperation {
  getName(): string;
  getMemberCountries(): Country[];
}
