//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import logoJackie from './jackie.jpg'; // Tell webpack this JS file uses this image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoJackie} className="App-logo" alt="logo" />
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
