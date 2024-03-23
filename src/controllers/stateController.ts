import { Request, Response } from 'express';
import { states } from '../core/factories/statesFactory';

type FindRequest = {
  country_code: string;
};

class StateController {
  static async getAll(request: Request, response: Response) {
    const { country_code }: FindRequest = request.body;

    const value = states.findAll(country_code);

    response.json(value);
  }
}

export default StateController;
