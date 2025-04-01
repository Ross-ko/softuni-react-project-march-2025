import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Service from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { UserProvider } from "./utils/UserProvider";
import Catalog from "./components/catalog/Catalog";
import CreateWorkout from "./components/catalog/createWorkout/CreateWorkout";
import WorkoutDetails from "./components/catalog/detailsWorkout/WorkoutDetails";
import EditWorkout from "./components/catalog/editWorkout/EditWorkout";

function Layout() {
    return (
        <>
            <Header />
            <Slider />
            <Outlet />
        </>
    );
}

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/catalog/create" element={<CreateWorkout />} />
                        <Route path="/catalog/:workoutId" element={<WorkoutDetails/>} />
                        <Route path="/catalog/:workoutId/edit" element={<EditWorkout />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
