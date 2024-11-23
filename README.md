# Full Stack Application: Business Hours Management System

This repository contains the code for a Full Stack Hours Management System. The system allows users to manage regular and special hours for a business, where special hours can be added dynamically. The backend is built with **Spring Boot** (Java), and the frontend is built using **React**.

## Project Structure

The project consists of two main parts:
1. **Backend** (`springboot`): A RESTful API built with Spring Boot to manage regular and special hours.
2. **Frontend** (`react`): A React application to interact with the backend API and manage hours via a user interface.


---

## Features

### Backend (Spring Boot)
- **API for Regular Hours**: Provides CRUD operations for managing the regular hours of a business.
- **API for Special Hours**: Allows users to add special hours, which override the regular hours for certain days.
- **Data Persistence**: The backend uses **MySQL** for storing hours data, providing persistent storage for regular and special hours

### Frontend (React)
- **Displaying Regular Hours**: Fetches and displays regular hours from the backend.
- **Adding Special Hours**: Users can input special hours through a form, which gets added to the backend and updates the displayed list.
- **UI**: A simple and clean user interface built with React to interact with the backend.

---

### Technologies Used
- **Spring Boot**: For building the backend API.
- **React**: For building the frontend UI.
- **Axios**: For making HTTP requests from the React frontend to the Spring Boot backend.
- **Maven**: For managing dependencies in the Spring Boot backend.
-**Node.js and npm**: For managing the React project's dependencies and development server.


## Setup and Installation

### Prerequisites

- **Java 17 or later** for the Spring Boot backend.
- **Node.js** and **npm** for the React frontend.

### Steps to Run the Backend (Spring Boot)

1. Clone the repository:
   git clone https://github.com/your-username/my-project.git
   cd my-project/springboot-demo

2. Make sure all the dependencies are installed:
./mvnw clean install   # If you're using Maven

Start the Spring Boot application:

./mvnw spring-boot:run

This will start the backend on http://localhost:8080.
The backend is now up and running, and ready to handle requests from the frontend.


Steps to Run the Frontend (React)

Navigate to the customers-hours directory:
cd my-project/customers-hours

Install all the required dependencies:
npm install

Start the React development server:
npm start
This will start the frontend on http://localhost:3000.

The React app will automatically communicate with the Spring Boot backend and display the hours management system.


### Endpoints (API Documentation)
**Regular Hours**
GET /api/hours: Fetches all the regular hours.

**Special Hours**
GET /api/hours/special: Fetches all the special hours.
POST /api/hours/special: Adds a new special hour entry. Requires a JSON body with date, startTime, endTime, and reason.
Example JSON for adding special hours:
{
  "date": "2024-11-25",
  "startTime": "09:00",
  "endTime": "18:00",
  "reason": "Holiday"
}

