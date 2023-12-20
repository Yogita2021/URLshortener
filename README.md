# URLshortener

## Frontend Deployed Link: https://6582755a6f1cd62e10d191de--timely-tarsier-a345a3.netlify.app/

## Backend Deployed Link: https://urlshortener-rtw2.onrender.com/

Welcome to the URL Shortener web application! This project is designed to simplify the process of shortening long URLs, making them more manageable and shareable. Whether you need to share links on social media, in emails, or anywhere else, our tool streamlines the process.

## Features

- **User Login-signup**: User Registeration and Login to the application.
- **URL Shortening**: Easily convert long URLs into short, easy-to-share links.
- **User-Friendly Interface**: A simple and intuitive interface for a seamless user experience.

-**LoginPage**

- ![image](./frontend/Images/Loginpage.png)

  -**Home Page**
  ![image](./frontend/Images/Homepage.png)

## Technologies Used

- **Frontend**: Built with Html,css and javascript for a modern and responsive user interface.
- **Backend**: Utilizes Node.js and Express for the server and API functionality.
- **Database**: MongoDB is used to store and manage URL data.

## Usage

1. Register and login with user information.
1. Enter the long URL you want to shorten in the provided input field.
1. Click the "Submit" button to generate a short URL.
1. Copy and share the shortened URL with others.

## Backend Documentation:

### Prerequisites

- Node.js
- MongoDB
- mongoose

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Yogita2021/URLshortener`
2. Backend: `cd Backend`
3. Install dependencies: `npm install`
4. Configure environment variables. `port : 3000, mongoUrl, secreteKey`
5. Start the development server: `npm run start`

## Usage

### Shortening a Url

To shorten a URL, make a POST request to `https://urlshortener-rtw2.onrender.com/url/shorten` with the original URL in req.body.

### Accessing original Url

To accessing original url GET request to `https://urlshortener-rtw2.onrender.com/url/:shortId`.

### User Registration and Login

To create new user account ,make a POST request to `https://urlshortener-rtw2.onrender.com/user/register` with name,email,password

If user is already registered then, make a POST request to `https://urlshortener-rtw2.onrender.com/user/login` with email,password.

### Security

- Basic authentication functionality (name,email,password)
- Authentication based on Tokens which is generated using jsonwebtoken.

## API Documentation

### Endpoint: `/user/register`

- Method: POST
- Parameters:
  - `name` (string): User's name.
  - `email` (string): User's email.
  - `password` (string): User's password.

### Endpoint: `/user/login`

- Method: POST
- Parameters:
  - `email` (string): User's email.
  - `password` (string): User's password.

### Endpoint: `/url/shorten`

- Method: POST
- Parameters:
  - `originalUrl`: The URL to be shortened in `req.body object`.
- Response:
  - `original` (string): Original URL.
  - `shorten` (string): Shortened URL.

### Endpoint: `url/:shortId`

- Method: GET
- Parameters:
  - `shortId` (string): The short URL generated in `req.params`.
  - It will redirect to the original URL.

## Contact

Have questions or feedback? Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/maneyogita/).

Thank you for using our URL Shortener web application!
