import { Request, Response } from 'express';
import { cities } from '../core/factories/cityFactory';

type FindAllRequest = {
  country_code: string;
  state_code: string;
};

type FindByRequest = {
  city_name: string;
};

class CityController {
  static async getAll(request: Request, response: Response) {
    const { country_code, state_code }: FindAllRequest = request.body;

    const value = cities.findAll(country_code, state_code);

    response.json(value);
  }

  static async getAllByName(request: Request, response: Response) {
    const { city_name }: FindByRequest = request.body;

    const value = cities.findByName(city_name);

    response.json(value);
  }
}

export default CityController;
