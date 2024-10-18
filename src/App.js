import './App.css';
import comingSoon from './images/coming-soon.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={comingSoon} className="poster" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
