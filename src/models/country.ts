import countriesData from '../data/countries.json';

type CountryProps = {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: timezonesProps[];
  translations: translationsProps;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
};

type timezonesProps = {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
};

type translationsProps = {
  kr: string;
  'pt-BR': string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  cn: string;
  tr: string;
};

class Country {
  countries: CountryProps[] = countriesData as CountryProps[];

  findAll() {
    return this.countries.map((country) => {
      return country.name;
    });
  }
}

export default Country;
