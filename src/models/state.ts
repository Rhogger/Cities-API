import statesData from '../data/states.json';

type StateProps = {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type: string | null;
  latitude: string;
  longitude: string;
};

class State {
  private states = statesData as StateProps[];

  findAll(country_code: string) {
    return this.states
      .filter((states) => states.country_code == country_code)
      .map((states) => {
        return states.name;
      });
  }
}

export default State;
