import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>
        <Header />
      </h1>
      <h2>
        <Texnologes />
      </h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IT Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>Message</a>
      <a>From</a>
    </div>
  );
};

const Texnologes = () => {
  return (
    <div>
      <ul>
        <li>techologiest3</li>
        <li>techologiest2</li>
        <li>techologiest1</li>
      </ul>
    </div>
  );
};

export default App;
