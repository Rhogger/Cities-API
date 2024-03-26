import { Request, Response } from 'express';
import { cities } from '../core/factories/cityFactory';

type FindAllRequest = {
  country_code: string;
  state_code: string;
};

class CityController {
  static async getAll(request: Request, response: Response) {
    const { country_code, state_code } = request.params;

    const value = cities.findAll(country_code, state_code);

    response.json(value);
  }

  static async getAllByName(request: Request, response: Response) {
    const { city_name } = request.params;

    const value = cities.findByName(city_name);

    response.json(value);
  }
}

export default CityController;
