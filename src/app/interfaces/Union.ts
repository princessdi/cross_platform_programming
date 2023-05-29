import { Country } from '../classes/Country';

export interface Union {
  getName(): string;
  getMemberCountries(): Country[];
}
