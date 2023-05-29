import { Component } from '@angular/core';
import { GeographicalObject } from '../classes/GeographicalObject';
import { Continent } from '../classes/Continent';
import { Island } from '../classes/Island';
import { Peninsula } from '../classes/Peninsula';
import { Country } from '../classes/Country';
import { CountryCooperation } from '../classes/CountryCooperation';
import { CountryUnion } from '../classes/CountryUnion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  objects: GeographicalObject[];

  constructor() {
    const europe = new Continent('Europe', 10180000, 741400000);
    const australia = new Continent('Australia', 8600000, 41700000);

    const greenland = new Island('Greenland', 2166000, 56025);
    const iceland = new Island('Iceland', 103000, 356991);

    const scandinavianPeninsula = new Peninsula(
      'Scandinavian Peninsula',
      2895000,
      21620000
    );
    const crimeanPeninsula = new Peninsula('Crimean Peninsula', 27000, 1904562);

    const france = new Country('France', 551695, 67060000);
    const germany = new Country('Germany', 357022, 83190556);
    const spain = new Country('Spain', 505992, 47012449);

    const europeanUnion = new CountryUnion('European Union', [
      france,
      germany,
      spain,
    ]);

    const aseanCountries = [
      new Country('Indonesia', 1904569, 273523615),
      new Country('Thailand', 513120, 69799978),
      new Country('Singapore', 728, 5892900),
    ];
    const asean = new CountryCooperation(
      'Association of Southeast Asian Nations',
      aseanCountries
    );

    this.objects = [
      europe,
      australia,
      greenland,
      iceland,
      scandinavianPeninsula,
      crimeanPeninsula,
      france,
      germany,
      spain,
      europeanUnion,
      asean,
    ];
  }
}
