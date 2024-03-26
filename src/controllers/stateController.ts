import { Request, Response } from 'express';
import { states } from '../core/factories/statesFactory';

class StateController {
  static async getAll(request: Request, response: Response) {
    const { country_code } = request.params;

    const value = states.findAll(country_code);

    response.json(value);
  }
}

export default StateController;
