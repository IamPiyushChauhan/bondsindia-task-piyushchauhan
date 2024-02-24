# bondsindia-task-piyushchauhan

## Introduction

This is a React application for the Bonds India task, developed by Piyush Chauhan. The program allows users to create and save data consisting of Title, Category, Description, and Date. Upon submitting the data, the application navigates to another page displaying the latest saved data along with all previously added data in a table. Redux is used to manage the state throughout the application.

## Technologies Used

- React
- React Router
- Redux

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/piyushchauhan/bondsindia-task-piyushchauhan.git
```

2. Navigate to the project directory:

```bash
cd bondsindia-task-piyushchauhan
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Open the application in your web browser.

2. Fill in the input fields (Title, Category, Description, Date) on the first page.

3. Submit the data.

4. The application will navigate to another page where the latest saved data is displayed along with all previously added data in a table.

## Structure

The project structure is as follows:

- `src/`
  - `redux/`: Redux actions, reducers, and store configuration
  - `Pages/`: Different pages of the application
  - `App.js`: Main component that sets up routes and initializes Redux store

## Dependencies

- react
- react-dom
- react-router-dom
- redux
- react-redux

