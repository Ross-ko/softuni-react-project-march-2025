import { Route, Routes } from "react-router";
import { useState } from "react";

import { UserContext } from "./context/UserContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Market from "./components/market/Market";
import CreateAd from "./components/create-ad/CreateAd";
import DetailsAd from "./components/details-ad/DetailsAd";
import EditAd from "./components/edit-ad/EditAd";
import Logout from "./components/logout/Logout";
import "./App.css";

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (data) => {
        setAuthData(data);
    };

    const userLogoutHandler = () => {
        setAuthData({});
    };

    return (
        <UserContext.Provider
            value={{ ...authData, userLoginHandler, userLogoutHandler }}
        >
            <div id="wrapper">
                <Header />
                <main id="main-element">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/market" element={<Market />} />
                        <Route path="/market/sell" element={<CreateAd />} />
                        <Route
                            path="/market/:itemId/details"
                            element={<DetailsAd />}
                        />
                        <Route
                            path="/market/:itemId/edit"
                            element={<EditAd />}
                        />
                    </Routes>
                </main>
            </div>
        </UserContext.Provider>
    );
}

export default App;
