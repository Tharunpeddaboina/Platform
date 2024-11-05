# Epicurious Platform

The Epicurious Platform is a full-stack application that allows users to search and filter recipes through a user-friendly interface. This project consists of a React-based frontend, integrated with Redux for state management, and a backend built with Python  Flask and MongoDB for data storage.


## Features

- Recipe search with filtering options
-  Dynamic filters for a smooth user experience
- Attractive, e-commerce-inspired UI design

## Tech Stack

- **Frontend**: React, Redux, Vite, Semantic UI
- **Backend**: Flask, FastAPI
- **Database**: MongoDB

## Setup and Installation

### Backend Setup

1. **Clone the Backend Repository**:

    ```bash
    git clone https://github.com/your-username/epicurious-backend.git
    ```

2. **Navigate to the Backend Directory**:

    ```bash
    cd epicurious-backend
    ```

3. **Set up a Python Virtual Environment**:

    ```bash
    python3 -m venv .venv
    source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`
    ```

4. **Install Dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

5. **Environment Variables**:

    Create a `.env` file in the root of the backend directory and add the following:

    ```env
    PORT=5000
    MONGODB_URL=mongodb://localhost:27017/epicurious
    JWT_SECRET=your-secret-key
    ```

6. **Run the Backend Server**:

    You may use either Flask , depending on the API you wish to start:

    - **For Flask**:

        ```bash
        flask run
        ```

    

7. **Test the Backend**:

    The backend should now be running on `http://localhost:5000`. You can test the API endpoints using a tool like Postman.

### Frontend Setup

1. **Clone the Frontend Repository**:

    ```bash
    git clone https://github.com/your-username/epicurious-frontend.git
    ```

2. **Navigate to the Frontend Directory**:

    ```bash
    cd epicurious-frontend
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Environment Variables**:

    Create a `.env` file in the root of the frontend directory and add the following:

    ```env
    VITE_API_URL=http://localhost:5000/api
    ```

5. **Run the Frontend**:

    ```bash
    npm run dev
    ```

6. **Access the Frontend**:

    Open your browser and go to `http://localhost:3000`.

## Running the Application

1. **Start the Backend Server**:

    Make sure the backend server is running on `http://localhost:5000` (or any specified port).

2. **Start the Frontend Server**:

    Ensure the frontend is running on `http://localhost:3000`.

3. **Access the Platform**:

    Visit `http://localhost:3000` to use the full Epicurious Platform application.

## Environment Variables

- **Backend**: `.env` setup as described above (PORT, MONGODB_URL, JWT_SECRET).
- **Frontend**: `.env` setup as described above (VITE_API_URL).

---

You’re all set to explore and run the Epicurious Platform! 
