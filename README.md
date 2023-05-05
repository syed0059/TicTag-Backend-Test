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

## Documentation
Full documentation of the basic API can be found [here](https://documenter.getpostman.com/view/21207444/2s93eX1Ydr#intro)

## Assumptions
As part of the development, a few assumptions were made:
- All user and product names are unique
- User role validation is done on the client side

## Developed using
- NestJS
- TypeScript
- MongoDB Atlas
- Mongoose
- Postman

## Improvements
Since this project was developed to demonstrate my ability to develop using new tools, I did not make the entities very complicated and used simplistic models for demonstration. 

However, the system can be improved with more role validation to ensure users are not able to access functions beyond their scope. Each user should also assign themselves a unique userID such as their email address or a username to be identified by instead of their names.