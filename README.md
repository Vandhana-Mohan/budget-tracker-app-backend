# Budget-Tracker-app

Budget Application Backend - This backend application is designed to handle requests for a budget application.


## [Click my Trello Board](https://trello.com/invite/b/aPBAsXLu/ATTI95e66bf9a94bda363eef290bb0bab0ddDDF29B80/budgeting-app)


## [Click my Deployed Backend URL](https://budget-tracker-app-backend.onrender.com)

---

## Installation

Getting Started

1. Fork and Clone the repository using the following command:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory and install the dependencies using the following command:

   ```
   `cd` into this repository
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=<port-number>
   ```

4. Start the server using the following command

   ```
   npm start
   ```

Available Endpoints

The following endpoints are available:

        | Method |   Endpoint   |      Description      |
        | :----: | :----------: | :-------------------: |
        |  GET   |   /budgets   |    Get all budgets    |
        |  GET   | /budgets/:id |  Get a budget by ID   |
        |  POST  |   /budgets   |  Create a new budget  |
        |  PUT   | /budgets/:id | Update a budget by ID |
        | DELETE | /budgets/:id | Delete a budget by ID |

---
