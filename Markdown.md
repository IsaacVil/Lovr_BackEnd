# Proyecto Mi amante ideal
The project consists of a traditional API for registering and finding ideal lovers, where users can post profiles and others can consult them based on interests, using a decoupled backend and frontend with a clear layered architecture.

It will execute all the code locally without external dependencies.

## Authors
 * Isaac Villalobos Bonilla, 2024124285
 * Christopher Daniel Vargas Villalta, 2024108443
   
---
## Architecture
* NodeJS with Express
* REST
* Decoupled backend and frontend

---
## Database Architecture
* MongoDB local will be the database engine of choice for the project
* It will contain a small seeded dataset loaded automatically

---
## Workflow 1 (Post lover profiles)
* Step 1. The user fills a form in the frontend application (React)
* Step 2. The frontend sends the JSON via POST /amantes to the backend API
* Step 3. The JSON contains name, age, interests
* Step 4. The endpoint /amantes validates the data using DTOs and inserts it into MongoDB, ensuring all business rules are respected
* Step 5. The backend returns a response and the frontend updates the UI accordingly
---
## Workflow 2 (Get lovers based on interest)
* Step 1. The user selects or inputs an interest in the frontend application
* Step 2. The frontend sends the request via GET /amantes?interes=x to the backend API
* Step 3. The backend processes the query parameter and searches in MongoDB
* Step 4. The endpoint returns all profiles matching the specified interest
* Step 5. The frontend receives the data and renders the results dynamically
