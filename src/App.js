import './App.css';
import { Collection } from './components/Collection/Collection';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Products } from './components/Products/Products';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Products/>
        <Collection/>
        <Footer/>
    </div>
  );
}

export default App;
