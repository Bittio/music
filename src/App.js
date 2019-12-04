import React, {useState, useEffect} from 'react';
import MyNavBar from "./components/MyNavBar";
import Home from "./components/Home";
import Music from "./components/Music";
import musicService from './services/Music';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const navLinks = ["Tampere", "Helsinki", "Pori"]
export default function App() {
    const [old, setOld] = useState(true);
    const [music, setMusic] = useState([]);
    
    const getmusic = () =>  {
        musicService
          .getAll()
          .then(allMusic => {
            setMusic(allMusic)
          })
      };
      useEffect(getmusic, []); 

    const newMusic = music.filter(k => {const musicDate = new Date(k.pvm); 
        return new Date(k.pvm) >= new Date()});
      
      const oldMusic = music.filter(k => {const musicDate = new Date(k.pvm); 
        return new Date(k.pvm) < new Date()});
    return (
     
    <Router>
      <div>
      <nav>
        <MyNavBar links={navLinks} old={old} setOld={setOld}/>
      </nav>    
        <Switch>
          <Route path="/new">
            {<div><h1>Tulevat keikat</h1><Music myMusic={newMusic} setMusic={setMusic}/></div>}
          </Route>
          <Route path="/old">
            {<div><h1>Menneet keikat</h1><Music myMusic={oldMusic} setMusic={setMusic}/></div>}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}