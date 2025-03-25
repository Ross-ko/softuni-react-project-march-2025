import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Market from "./components/market/Market";
import CreateAd from "./components/create-ad/CreateAd";
import "./App.css";

function App() {
    return (
        <div id="wrapper">
            <Header />
            <main id="main-element">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="/market/sell" element={<CreateAd />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
