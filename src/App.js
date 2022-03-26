import {useEffect} from 'react'
import './App.css';
import AppBar from './components/AppBar';
import SliderOne from './components/SliderOne';
import SliderTwo from './components/SliderTwo';
import SliderThree from './components/SliderThree';
import Footer from './components/Footer';


const loadScript = function(src) {
  var tag = document.createElement("script");
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName("body")[0].appendChild(tag);
};

function App() {

  useEffect(() => {
    loadScript('js/jquery.js');
    loadScript('js/plugins.js');
    loadScript('js/functions.js');

  },[])
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
