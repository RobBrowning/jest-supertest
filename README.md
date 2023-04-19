Jest Supertest Example with SWAPI API

This is an example of using Jest and Supertest to test the SWAPI (Star Wars API) using the /starships/ endpoint.

Prerequisites

To run these tests, you'll need:
Node.js (v10.13 or higher)
npm
Installation

Clone this repository to your local machine:
git clone https://github.com/your-username/swapi-jest-supertest.git
Navigate to the project directory:

cd swapi-jest-supertest
Install the dependencies using your package manager of choice:

npm install

To run the tests, simply run the following command in your terminal:

npm test

This will run the Jest test runner and execute the tests in the starships.test.js file.

If all the tests pass, you should see output like this:

bash
Copy code
 PASS  ./starships.test.js
  Starships API endpoint
    ✓ should return a 200 status code (76 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
If any tests fail, you'll see output describing the failure(s).

Additional Information

If you want to modify the tests or add new ones, you can do so in the starships.test.js file.
The baseUrl variable in the test file is set to https://swapi.dev/api/, but you can modify this to point to a different API endpoint if you like.
If you want to learn more about Jest or Supertest, check out the official documentation:
Jest
Supertest