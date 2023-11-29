import logo from "./logo.svg";
import "./App.css";

function App() {
    // Get theme from browser preference
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    return (
        <div className={`App App-${theme}`}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link" href="/" rel="noopener noreferrer">
                    Good App
                </a>
            </header>

            <div className="App-body">
                <p>
                    <a href="/bad-app" rel="noopener noreferrer">
                        Bad App
                    </a>
                </p>
                <p>
                    <a href="/good-app" rel="noopener noreferrer">
                        Good App
                    </a>
                </p>
            </div>
        </div>
    );
}

export default App;
