import React, {useState, useEffect} from 'react';
import '../App.css';
import Music from "./Music";
//import Karu_selli from "./components/Karu_selli"
//import images from "./components/ImageData"
import musicService from '../services/Music';
const navLinks = ["Tampere", "Helsinki", "Pori"]



const Home = () => {
  const [old, setOld] = useState(true);
  return (
    <div className="App">
      <section>
      <br></br>
        <a className="linkki" href="/old">Tulevat keikat</a>
        <br></br>
        <br></br>
        <a className="linkki" href="/new">Menneet keikat</a>
            
      </section>    
    </div>
  );
}

export default Home;
