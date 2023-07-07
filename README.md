# Real Estate Management - BackEnd (TypeORM and Entity-Relationship)

## About
This is a real estate management backend application. It was built upon an Entity-Relationship Diagram with TypeORM, Express and PostgresSQL.

## Technologies
- JavaScript + TypeScript
- Express
- Node.js
- PostgreSQL
- TypeORM

## Endpoints

| HTTP Method | Description | Endpoint | User Types | Authentication Required |
| --- | --- | --- | --- | --- |
| POST | Create User | `/api/users` | Admin and NotAdmin | No Authentication |
| GET | List All Users | `/api/users` | Admin | Authentication |
| POST | Update User | `/api/users/user_id` | Admin | Authentication |
| DELETE | Soft Delete User | `/api/users/user_id` | Admin | Authentication |
| --- | --- | --- | --- | --- |
| POST | Login | `/api/login` | Admin and NotAdmin | No Authentication |
| --- | --- | --- | --- | --- |
| POST | Create Category | `/api/categories` | Admin | Authentication |
| GET | List All Categories | `/api/categories` | Admin and NotAdmin | No Authentication |
| GET | List Category's Properties | `/api/categories/category_id/realEstate` | Admin and NotAdmin | No Authentication |
| --- | --- | --- | --- | --- |
| POST | Create Property | `/api/realEstate` | Admin | Authentication |
| GET | List All Properties | `/api/realEstate` | Admin and NotAdmin | No Authentication |
| --- | --- | --- | --- | --- |
| POST | Create Schedule | `/api/schedules` | Admin | Authentication |
| GET | List Property's Schedules | `/api/schedules/realEstate/realEstate_id` | Admin | Authentication |


## Getting Started
To run the application locally, follow these steps:

1. Clone the repository: **`git clone <repository-url>`**
2. Navigate to the project directory: **`cd motor-shop-front`**
3. Install the dependencies: **`npm install`**
4. Set up your database: We recommend using Postgres, but you can choose any database that suits your needs
5. Create a .env file based on the provided .env.example file, and fill in the necessary information
6. Generate a migration file: **`npm run typeorm migration:generate ./src/migrations/migration-name -d ./src/data-source.ts`**
7. Run migration in the database: **`npm run typeorm migration:run -d ./src/data-source`**
8. Start the development server: **`npm dev`**
9. Test and explore the application using your preferred tool (e.g., Insomnia, Postman)

## Tests
This application includes tests that validate if all business rules have been correctly implemented. The tests are located in src/__tests__. The integration subfolder contains the tests, while the mocks subfolder contains the data used for testing. The jest.config.ts file includes some necessary configurations for running the tests. Do not modify any of these files under any circumstances. Modifying them may compromise the integrity of the tests. Also, do not modify the test script in the package.json file. This script is used to run the tests.

To run the tests, make sure you are in the project directory in your terminal. Once you are in the correct directory, you can use the following commands:

1. Run all tests: **npm run test**
2. Run all tests with detailed logging: **`npm run test --all`**
3. Run tests in a specific folder: **`npm run test <subfolder>`**
4. Run tests in a specific file: **`npm run test <subfolder>/<file>`**

After running one of the commands, a log will appear in your terminal containing information about the test execution.

## Documentation
Check the application documentation here.




