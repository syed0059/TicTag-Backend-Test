# TicTag Backend Technical Test

Developed a backend API for the warranty claims management system for a fictional company as part of a technical assignment

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
- User's usernames are unique, although their names do not need to be unique
- The sender's unique username and role are sent with each request body for role-based authentication

## Developed using
- NestJS
- TypeScript
- MongoDB Atlas
- Mongoose
- Postman
