# Project Documentation

# softuni-react-project-march-2025

## Overview
This project is a Single Page Application (SPA) developed with React. The application uses React Router for navigation, a Context API for managing user state, and a REST API for communicating with the back-end service. The project demonstrates CRUD operations on "workouts".

## Project Structure
- **client/src/components/**: Contains UI components such as pages (Home, About, Contact, Catalog, etc.) and workout management components (CreateWorkout, EditWorkout, WorkoutDetails).
- **client/src/context/**: Contains the context (UserContext) and Provider (UserProvider) for managing authentication and global state.
- **client/src/guards/**: Contains route guard components – `PrivateRoute` and `PublicRoute`, which control access to protected and public pages.
- **client/src/utils/**: Contains helper functions such as `request.js` for HTTP requests.
- **client/src/workoutService/**: Contains the backend communication service (CRUD operations on workouts).

## Route Guards
To ensure the security of the application, the following route guards have been implemented:
- **PrivateRoute**: Access to protected pages is only allowed if the user is logged in. If not, the user is redirected to the login page.
- **PublicRoute**: Public login and registration pages are only available to guests. If the user is logged in, the user is redirected to the home page.

Example implementation:
```jsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

export const PrivateRoute = () => {
const { user } = useContext(UserContext);
return user ? <Outlet /> : <Navigate to="/login" />;
};

export const PublicRoute = () => {
 const { user } = useContext(UserContext);
 return !user ? <Outlet /> : <Navigate to="/" />;
};