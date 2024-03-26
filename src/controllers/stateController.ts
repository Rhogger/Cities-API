import { Request, Response } from 'express';
import { states } from '../core/factories/statesFactory';

class StateController {
  static async reportStateCode(request: Request, response: Response) {
    response.status(404);
    response.json('Error! Report a country code in the params.');
  }

  static async getAll(request: Request, response: Response) {
    const { country_code } = request.params;

    const value = states.findAll(country_code.toUpperCase());

    if (value.length <= 0) {
      response.status(404).json('This State not found.');

      return;
    }

    response.json(value);
  }
}

export default StateController;
