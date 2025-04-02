# Project Documentation

# softuni-react-project-march-2025

## 1. Overview

This project is a Single Page Application (SPA) built with React and Vite. It is designed as a workout management application where users can view, create, update, and delete workout entries. The app is divided into a public part (accessible by all visitors) and a private part (accessible only by authenticated users).

## 2. Technology Stack

- **React**: Used to build reusable UI components.
- **React Router v6**: Handles client-side routing including dynamic routes.
- **Context API**: Manages global state for user authentication.
- **React Hooks**: Utilizes `useState`, `useContext`, and, where applicable, `useEffect` for state and lifecycle management.
- **Vite**: Bundler used for faster development and hot module replacement (HMR).
- **REST API**: Communicates with the backend (e.g., at `http://localhost:3030/jsonstore/workouts`) to perform CRUD operations on workouts.

## 3. Project Structure

softuni-react-project-march-2025/
└── client/
    ├── public/
    │   ├── css/
    │   │   ├── bootstrap.css
    │   │   ├── responsive.css
    │   │   └── style.css
    │   └── images/
    ├── src/
    │   ├── authService/
    │   │   └── authService.js
    │   ├── components/
    │   │   ├── about/
    │   │   │   └── About.jsx
    │   │   ├── catalog/
    │   │   │   ├── Catalog.jsx
    │   │   │   ├── createWorkout/
    │   │   │   │   ├── CreateWorkout.jsx
    │   │   │   │   └── createWorkout.css
    │   │   │   ├── detailsWorkout/
    │   │   │   │   ├── WorkoutDetails.jsx
    │   │   │   │   └── workoutDetails.css
    │   │   │   └── editWorkout/
    │   │   │       └── EditWorkout.jsx
    │   │   ├── contact/
    │   │   │   └── Contact.jsx
    │   │   ├── header/
    │   │   │   └── Header.jsx
    │   │   ├── home/
    │   │   │   └── Home.jsx
    │   │   ├── login/
    │   │   │   ├── Login.jsx
    │   │   │   └── auth.css
    │   │   ├── logout/
    │   │   │   └── Logout.jsx
    │   │   ├── register/
    │   │   │   ├── Register.jsx
    │   │   │   └── auth.css
    │   │   ├── services/
    │   │   │   └── Services.jsx
    │   │   └── slider/
    │   │       └── Slider.jsx
    │   ├── context/
    │   │   └── UserContext.jsx
    │   ├── guards/
    │   │   └── RouteGuards.jsx
    │   ├── utils/
    │   │   ├── request.js
    │   │   └── UserProvider.jsx
    │   ├── workoutService/
    │   │   └── workoutService.js
    │   └── App.jsx
    └── package.json


## 4. Key Functionalities

### 4.1 Public and Private Areas

- **Public Part**:  
  Accessible without authentication. Includes pages such as Home, About, Contact, Catalog (workout list), and workout details.

- **Private Part**:  
  Accessible only for authenticated users. Includes pages like CreateWorkout, EditWorkout, and Logout.

### 4.2 User Authentication and Persistence

- **Authentication**:  
  Users can register and log in using forms that validate inputs (including email format) before submission.

- **Persistent Login**:  
  After a successful login, user data (including the access token) is stored in `localStorage` via the `UserProvider`, ensuring the user remains logged in even after a page refresh.

### 4.3 Route Guards

- **PrivateRoute**:  
  A component that checks if the user is authenticated. If not, it redirects to the login page.
  
- **PublicRoute**:  
  Prevents authenticated users from accessing the login and registration pages by redirecting them to the home page.

Both route guards are implemented in `client/src/guards/RouteGuards.jsx` and integrated into the route configuration in `App.jsx`.

### 4.4 CRUD Operations on Workouts

- **Workout Management**:  
  Users can create, view, edit, and delete workout entries.

- **Service Layer**:  
  The `workoutService` (located in `client/src/workoutService/workoutService.js`) communicates with the backend REST API using helper functions defined in `request.js`.

### 4.5 Form Validation and Error Handling

- **Registration and Login Forms**:  
  These forms include input validation to ensure that a valid email is provided and that password fields meet requirements (e.g., matching confirmation passwords).

- **Error Handling**:  
  Both frontend forms and API calls have error handling to provide clear feedback in case of invalid input or server errors.

### 4.6 Component Styling and UI/UX

- **External CSS**:  
  The application utilizes external CSS files (located in `client/public/css/`) for styling, ensuring a responsive and user-friendly interface.

- **Reusable Components**:  
  The UI is built from modular and reusable components, making the codebase maintainable and scalable.

## 5. Running the Application

1. **Clone the Repository**:
- git clone <repo-url>

2. **Install Dependencies**:
Navigate to the project directory.
Right click on "client" folder, select "Open in Integrated Terminal" and run:
- npm install

3. **Start the Application**:
- npm run dev

4. **Start the Server**
Right click on "server" folder, select "Open in Integrated Terminal" and run:
- node server

5. **Access the Application**:
Open your browser and navigate to:
[text](http://localhost:5173/)

## 6. Additional Enhancements and Future Improvements

- **Route Guards** ensure that only authenticated users can access private routes.
- **Persistent Authentication** maintains user sessions via localStorage.
- **Improved Form Validation** ensures robust input checking and error feedback.
- **Scalable Architecture**: The project is organized into clear directories for components, context, services, and utilities, allowing for easier future enhancements.
- **Future Enhancements** could include unit tests, integration with additional APIs, or adopting state management solutions like Redux.