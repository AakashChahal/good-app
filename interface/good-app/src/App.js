import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import colors from "./colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import UserContext from "./context/userContext";
import NoMatch from "./components/NoMatch";

function App() {
    // Get theme from browser preference
    const [theme, setTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
    const [user, setUser] = useState(null);

    return (
        <div
            className={`App`}
            style={{
                backgroundColor:
                    theme === "dark"
                        ? colors.darkBackground
                        : colors.lightBackground,
                color: theme === "dark" ? colors.darkText : colors.lightText,
            }}
        >
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link" href="/" rel="noopener noreferrer">
                    Good App
                </a>
                <label className="App-switch">
                    <input
                        type="checkbox"
                        checked={theme === "dark"}
                        onChange={(e) => {
                            setTheme(e.target.checked ? "dark" : "light");
                        }}
                    />
                    <span className={`App-slider round ${theme}`}>
                        {theme === "dark" ? "dark" : "light"}
                    </span>
                </label>
            </header>

            <div
                className="App-body"
                style={{
                    textAlign: "center",
                    marginTop: "50%",
                    transform: "translateY(-50%)",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <UserContext.Provider value={{ user, setUser }}>
                    <Router>
                        <Routes>
                            <Route path="" element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route path="home" element={<HomePage />} />
                            <Route path="*" element={<NoMatch />} />
                        </Routes>
                    </Router>
                </UserContext.Provider>
            </div>
        </div>
    );
}

export default App;
