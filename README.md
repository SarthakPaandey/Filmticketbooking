# Film Ticket Booking

A full-stack film ticket booking web application with user authentication, payment processing, and email notifications.

## Overview

Filmticketbooking is a web application that allows users to browse films, select seats, and book tickets online. The project is structured with a separate client and server, using Node.js/Express on the backend and a JavaScript frontend.

## Tech Stack

### Backend
- **Node.js** with **Express** — REST API server
- **MongoDB** with **Mongoose** — Database and ODM
- **JWT (jsonwebtoken)** — User authentication
- **bcrypt** — Password hashing
- **Stripe** — Payment processing
- **Nodemailer** — Email notifications
- **dotenv** — Environment configuration

## Project Structure

```
project/
├── client/        # Frontend application
├── server/        # Backend Express API
├── package.json   # Root project configuration
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB instance
- Stripe account (for payments)

### Installation

```bash
# Install all dependencies and build client
npm run build

# Start the server
npm start
```

## Features

- User registration and login with JWT-based authentication
- Film browsing and seat selection
- Online ticket booking with Stripe payment integration
- Email confirmation via Nodemailer
- Responsive UI design
