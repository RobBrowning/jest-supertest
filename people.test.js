const request = require('supertest');
const baseUrl = 'https://swapi.dev/api/';

describe('People API endpoint', () => {
  it('should return a 200 status code', async () => {
    const response = await request(baseUrl).get('people/');
    expect(response.status).toEqual(200);
  });
});
