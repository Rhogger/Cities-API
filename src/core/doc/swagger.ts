import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Cities API',
      version: '1.0.0',
      description:
        'API Documentation for managing cities, states, and countries.',
    },
    servers: [
      {
        url: `${process.env.RAILWAY_PUBLIC_DOMAIN}/api/`,
        description: 'Development server',
      },
    ],
    paths: {
      '/country': {
        get: {
          summary: 'Get all countries',
          description: 'Returns a list of all countries in the world.',
          responses: {
            200: {
              description: 'A JSON array of countries.',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/state/{country_code}': {
        get: {
          summary: 'Get all states of a country',
          description: 'Returns a list of all states of a specific country.',
          parameters: [
            {
              in: 'path',
              name: 'country_code',
              description:
                'Code of the country for which to retrieve the states.',
              required: true,
              schema: {
                type: 'string',
                format: 'string',
                minLength: 1,
              },
            },
          ],
          responses: {
            200: {
              description: 'A JSON array of states of the specified country.',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            404: {
              description: 'Neither state not found.',
            },
          },
        },
      },
      '/city/{country_code}/{state_code}': {
        get: {
          summary: 'Get all cities of a state',
          description:
            'Returns a list of all cities of a specific state in a country.',
          parameters: [
            {
              in: 'path',
              name: 'country_code',
              description:
                'Code of the country for which to retrieve the cities.',
              required: true,
              schema: {
                type: 'string',
                format: 'string',
                minLength: 1,
              },
            },
            {
              in: 'path',
              name: 'state_code',
              description:
                'Code of the state for which to retrieve the cities.',
              required: true,
              schema: {
                type: 'string',
                format: 'string',
                minLength: 1,
              },
            },
          ],
          responses: {
            200: {
              description: 'A JSON array of cities of the specified state.',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            404: {
              description: 'Neither city not found.',
            },
          },
        },
      },
      '/city/{city_name}': {
        get: {
          summary: 'Get cities by name',
          description: 'Returns a list of cities matching the provided name.',
          parameters: [
            {
              in: 'path',
              name: 'city_name',
              description: 'Name of the city to retrieve.',
              required: true,
              schema: {
                type: 'string',
                format: 'string',
                minLength: 1,
              },
            },
          ],
          responses: {
            200: {
              description: 'A JSON array of cities matching the provided name.',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            404: {
              description: 'Neither city not found.',
            },
          },
        },
      },
    },
  },
  apis: ['**/*.ts'],
};

export const specs = swaggerJsdoc(options);
