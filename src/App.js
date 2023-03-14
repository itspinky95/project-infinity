import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/itspinky1995/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/itspinky95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://twitter.com/home?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
