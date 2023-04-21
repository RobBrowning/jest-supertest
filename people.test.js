const request = require('supertest');
const baseUrl = 'https://swapi.dev/api/';

describe('People API endpoint', () => {
  it('should return a 200 status code', async () => {
    const response = await request(baseUrl).get('people/');
    expect(response.status).toEqual(200);
  });
});

const Joi = require('joi');
const schema = Joi.object({
  birth_year: Joi.string().required(),
  eye_color: Joi.string().required(),
  films: Joi.array().items(Joi.string()).required(),
  gender: Joi.string().required(),
  hair_color: Joi.string().required(),
  height: Joi.string().required(),
  homeworld: Joi.string().required(),
  mass: Joi.string().required(),
  name: Joi.string().required(),
  skin_color: Joi.string().required(),
  created: Joi.string().required(),
  edited: Joi.string().required(),
  species: Joi.array().items(Joi.string()).required(),
  starships: Joi.array().items(Joi.string()).required(),
  url: Joi.string().required(),
  vehicles: Joi.array().items(Joi.string()).required(),
});

describe('GET /people/1', () => {
  it('should return a valid schema', async () => {
    const response = await request(baseUrl)
      .get('/people/1/')
      .expect('Content-Type', /json/)
      .expect(200);

    const { error } = schema.validate(response.body);

    expect(error).toBeFalsy();
  });
});
