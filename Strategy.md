1. Build Verification
- Objective: To verify that the basic functionality of the application is working as expected.
- Test Cases:
    - A simple test to verify that the API endpoint is responding with the correct HTTP status code (e.g., 200).
    - A test to verify that the API endpoint is responding with the correct content type (e.g., JSON).
    - A test to verify that the response from the API endpoint matches the expected schema.
- Execution Frequency: After every successful build.
- Use of Mocks: Not necessary for this category of tests, as they only verify the basic functionality of the application.

2. Smoke Tests
- Objective: To verify that the critical functionality of the application is working as expected.
- Test Cases:
    - A test to verify that the API endpoint for retrieving the list of resources is responding with the correct HTTP status code (e.g., 200).
    - A test to verify that the API endpoint for retrieving a specific resource is responding with the correct HTTP status code (e.g., 200).
    - A test to verify that the response from the API endpoint for retrieving a specific resource matches the expected schema.
- Execution Frequency: Daily or after every significant code change.
- Use of Mocks: Depending on the API dependencies and how the application retrieves data, it might be useful to use mocks to simulate certain data conditions or avoid hitting external APIs, which could reduce the test execution time. For example, you can use a mock to simulate an API response with specific data that is not available during the test execution.

3. Regression Tests
- Objective: To verify that the changes made to the application do not break existing functionality.
- Test Cases:
    - A test to verify that the API endpoint for creating a new resource is responding with the correct HTTP status code (e.g., 201).
    - A test to verify that the API endpoint for updating an existing resource is responding with the correct HTTP status code (e.g., 200).
    - A test to verify that the API endpoint for deleting an existing resource is responding with the correct HTTP status code (e.g., 204).
- Execution Frequency: After every significant code change or before a release.
- Use of Mocks: It's recommended to use mocks for this category of tests, especially if the tests interact with external APIs or dependencies that may not be reliable or consistent during test execution. Mocks can simulate the behavior of the external APIs or dependencies, enabling you to isolate the functionality being tested and ensure that any failures are related to the code changes and not external factors. For example, you can use a mock to simulate a failed API response or a slow network connection.
