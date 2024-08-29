# Product Management Application

## Overview
The Product Management Application is a web-based tool that allows users to manage products, including adding, editing, and listing them. This application is built using AngularJS for the front-end and Node.js with Express for the back-end. The product data is stored and managed using MongoDB. The app provides an intuitive interface for users to manage their product listings efficiently.

## Objective
The main objective of this application is to provide an easy-to-use platform for managing product information. Users can add new products, edit existing products, and view a list of all products in the database. The application is designed to handle basic CRUD (Create, Read, Update, Delete) operations on products.

## Features
- **Add Products**: Users can add new products by providing details such as name, price, review, and rating.
- **Edit Products**: Users can modify existing product details.
- **List Products**: Users can view a list of all products, including their name, price, review, and rating.
- **Form Validation**: Input validation is in place to ensure that data entered by users is accurate and complete.
- **Responsive Design**: The application is designed to work seamlessly on various screen sizes.

## Technology Stack
- **Front-End**:
  - AngularJS: For building dynamic, single-page web applications.
  - HTML/CSS: For structuring and styling the application.
  - Font Awesome: For icons and visual enhancements.

- **Back-End**:
  - Node.js: For server-side programming and handling requests.
  - Express: A Node.js framework used to build RESTful APIs.
  - MongoDB: A NoSQL database used to store product data.
  - Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Architecture
The application follows a client-server architecture where the AngularJS front-end communicates with the Node.js back-end through RESTful API calls. The back-end is responsible for handling data requests and interacting with the MongoDB database.

1. **Front-End (Client)**:
   - AngularJS is used to handle user interactions, data binding, and rendering the UI.
   - The client sends HTTP requests to the server for CRUD operations.

2. **Back-End (Server)**:
   - Node.js and Express are used to create API endpoints that handle requests from the client.
   - MongoDB stores the product data, and Mongoose is used to interact with the database.

3. **Database**:
   - MongoDB is used as the database to store product details.
   - Mongoose provides schema validation and easy data interaction.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running locally or in the cloud.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/product-management-app.git
   cd product-management-app
2. **Install Server Dependencies:**
   ```bash
   npm install
3. **Start MongoDB:**
    Ensure MongoDB is running on your local machine or provide the connection string for a cloud-based MongoDB instance.
4. **Run the Server:**
   ```bash
   node server.js
- The server will start on http://localhost:3000.
5. **Run the Front-End:**
- Open index.html in your web browser to start the application.
6. **Access the Application:**
- Navigate to http://localhost:3000 to access the Product Management app.
## Usage
- **Add a Product:** Enter the product details in the form and click "Add Product."
- **Edit a Product:** Click "Edit" next to the product you want to modify, update the details, and save changes.
- **View Products:** The list of all products will be displayed on the main page.
