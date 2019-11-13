import React from 'react';
import './App.css';
import MyNavBar from "./components/MyNavBar"
import Karu_selli from "./components/Karu_selli"
import images from "./components/ImageData"
const navLinks = ["Tampere", "Helsinki", "Pori"]
const App = () => {
  return (
    <div className="App">
      <header>
        
      </header>
    
    <nav>
      <MyNavBar links={navLinks}/>
    </nav>
    <section>
    <Karu_selli images={images}/>
    </section>
    </div>
  );
}

export default App;
