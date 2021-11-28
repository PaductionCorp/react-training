import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coucou, c'est <code>Paduction</code> et Reactjs a l'air pas mal.
        </p>
        <a
          className="App-link"
          href="https://paduction.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          visite Paduction.com
        </a>
      </header>
    </div>
  );
}

export default App;
