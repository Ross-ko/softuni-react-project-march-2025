import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
    return (
        <div id="wrapper">
            <Header />
            <main id="main-element">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
