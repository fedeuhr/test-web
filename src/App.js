import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Nosotros from './components/Nosotros';
import Novedades from './components/Novedades';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Main />
        <Nosotros />
        <Novedades />
        <Gallery />
        <Footer />
    </div>
  );
}

export default App;
