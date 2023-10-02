import './App.css';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
