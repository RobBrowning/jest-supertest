const request = require('supertest');
const baseUrl = 'https://swapi.dev/api/';

describe('Starships API endpoint', () => {
  it('should return a 200 status code', async () => {
    const response = await request(baseUrl).get('starships/');
    expect(response.status).toEqual(200);
  });
});
