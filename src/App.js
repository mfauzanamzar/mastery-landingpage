import {useEffect} from 'react'
import './App.css';
import AppBar from './components/AppBar';
import SliderOne from './components/SliderOne';
import SliderTwo from './components/SliderTwo';
import SliderThree from './components/SliderThree';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <SliderOne/>
      <SliderTwo/>
      <SliderThree/>
      <Footer/>
    </div>
  );
}

export default App;
