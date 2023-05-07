# TicTag Backend Technical Test

Developed a backend API for the warranty claims management system for a fictional company as part of a technical assignment

## Installation
Clone the git repo and then run <code>npm install</code> to install the dependencies, and then <code>npm run start</code> to start the server

Before running, replace the DB URI with your own URI in the .env file

## Functionality
- [x] Customer & Staff account creation with separate roles
- [x] User can view their own account details
- [x] Staff can create, view, edit and delete household appliance products
- [x] Customer can view list of products
- [x] Customer can create warranty claim for a product
- [x] Customer can view his own warranty claims
- [x] Staff can view all warranty claims
- [x] Staff can approve or reject a warranty claim

Uses Role-Based Access Control (RBAC) to validate user permissions to prevent unauthorised API calls

## Documentation
Full documentation of the basic API can be found [here](https://documenter.getpostman.com/view/21207444/2s93eX1Ydr)

## Assumptions
As part of the development, a few assumptions were made:
- Product names are unique
- The sender's unique username and role are sent with each request body for role-based authentication
- Retrieval of claim by ID is not necessary
- Each claim can be uniquely identified just by its owner's ID and the corresponding product's ID

## Developed using
- NestJS
- TypeScript
- MongoDB Atlas
- Mongoose
- Postman
- bcrypt

## Improvements
Users should be issued a bearer token when they first sign-in that they can use to verify themselves whenever a request is made.
