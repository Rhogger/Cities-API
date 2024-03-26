import { Request, Response } from 'express';
import { cities } from '../core/factories/cityFactory';

class CityController {
  static async getAll(request: Request, response: Response) {
    const { country_code, state_code } = request.params;

    const value = cities.findAll(country_code, state_code);

    if (value.length <= 0) {
      response
        .status(404)
        .json('Report the correct name of city, state code or country code.');

      return;
    }

    response.json(value);
  }

  static async getAllByName(request: Request, response: Response) {
    const { city_name } = request.params;

    const value = cities.findByName(city_name);

    if (value.length <= 0) {
      response
        .status(404)
        .json('Report the correct name of city, state code or country code.');

      return;
    }

    response.json(value);
  }
}

export default CityController;
