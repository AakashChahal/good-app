import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
    // Get theme from browser preference
    const [theme, setTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );

    return (
        <div className={`App App-${theme}`}>
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
                    <span className="App-slider round">
                        {theme === "dark" ? "dark" : "light"}
                    </span>
                </label>
            </header>

            <div className="App-body">
                <p>
                    <a
                        className="App-link"
                        href="/bad-app"
                        rel="noopener noreferrer"
                    >
                        Bad App
                    </a>
                </p>
                <p>
                    <a
                        className="App-link"
                        href="/good-app"
                        rel="noopener noreferrer"
                    >
                        Good App
                    </a>
                </p>
            </div>
        </div>
    );
}

export default App;
