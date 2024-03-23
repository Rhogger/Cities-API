import { Request, Response } from 'express';
import { countries } from '../core/factories/countryFactory';

class CountryController {
  static async getAll(request: Request, response: Response) {
    const value = countries.findAll();

    response.json(value);
  }
}

export default CountryController;
