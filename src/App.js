import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

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
          Visite Paduction.com
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
