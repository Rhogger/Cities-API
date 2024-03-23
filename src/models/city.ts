import citiesData from '../data/cities.json';

type CityProps = {
  id: number;
  name: string;
  state_id: number;
  state_code: string;
  state_name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  latitude: string;
  longitude: string;
  wikiDataId: string;
};

class City {
  private cities = citiesData as CityProps[];

  findAll(country_code: string, state_code: string) {
    return this.cities
      .filter(
        (cities) =>
          cities.country_code == country_code && cities.state_code == state_code
      )
      .map((cities) => {
        return cities.name;
      });
  }

  findByName(city_name: string) {
    return this.cities
      .filter((cities) => cities.name == city_name)
      .map((cities) => {
        return [cities.name, cities.state_name, cities.country_name];
      });
  }
}

export default City;
