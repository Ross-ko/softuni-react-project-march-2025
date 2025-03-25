import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
    return (
        <div id="wrapper">
                <Header />
                <main id="main-element">
                    <Home />
                </main>
        </div>
    );
}

export default App;
