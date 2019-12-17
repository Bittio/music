import React, {useState, useEffect} from 'react';
import MyNavBar from "./components/MyNavBar";
import Home from "./components/Home";
import Music from "./components/Music";
import NewMusic from "./components/NewMusic";
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
    
    const[newArtisti, setNewArtisti] = useState("");
    const[newTapahtuma, setNewTapahtuma] = useState("");
    const[newMainoskuva, setNewMainoskuva] = useState("");
    const[newKuvaus, setNewKuvaus] = useState("");
    const[newPvm, setNewPvm] = useState("");
    const[newAika, setNewAika] = useState("");
    const[newOsoite, setNewOsoite] = useState("");
    const[newPaikkakunta, setNewPaikkakunta] = useState("");
    const[newLippulinkki, setNewLippulinkki] = useState("");
    const[newGenre, setNewGenre] = useState("");
    const[newArtistilinkki, setNewArtistilinkki] = useState("");

    const getmusic = () =>  {
        musicService
          .getAll()
          .then(allMusic => {
            setMusic(allMusic)
          })
      };
      useEffect(getmusic, []); 
      const addMusic = event => {
        const now = new Date();
        event.preventDefault();
        const testMusic = {
        artisti: newArtisti,
        tapahtuma: newTapahtuma,
        mainoskuva: newMainoskuva,
        kuvaus: newKuvaus,
        pvm: newPvm,
        aika: newAika,
        osoite: newOsoite,
        paikkakunta: newPaikkakunta,
        lippulinkki: newLippulinkki,
        genre: newGenre,
        artistilinkki: newArtistilinkki
        };
        musicService
        .add(testMusic)
        .then(ms => {
        let tempMusic = music.concat(ms);
        setMusic(tempMusic);
        setNewArtisti("");
        setNewTapahtuma("");
        setNewMainoskuva("");
        setNewKuvaus("");
        setNewPvm("");
        setNewAika("");        
        setNewOsoite("");
        setNewPaikkakunta("");
        setNewLippulinkki("");
        setNewGenre("");
        setNewArtistilinkki("");
        })
      }
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
          <Route path="/lisaakeikka">
          {<div><h1>Lisää keikka</h1><NewMusic newArtisti={newArtisti}
          newTapahtuma={ newTapahtuma}
          newMainoskuva={ newMainoskuva}
          newKuvaus={ newKuvaus}
          newPvm={ newPvm}
          newAika={ newAika}
          newOsoite={ newOsoite}
          newPaikkakunta={ newPaikkakunta}
          newLippulinkki={ newLippulinkki}
          newGenre={ newGenre}
          newArtistilinkki={ newArtistilinkki}
          setNewArtisti={ setNewArtisti} 
          setNewTapahtuma={ setNewTapahtuma} 
          setNewMainoskuva={ setNewMainoskuva}
          setNewKuvaus={ setNewKuvaus}
          setNewPvm={ setNewPvm}
          setNewAika={ setNewAika}
          setNewOsoite={ setNewOsoite}
          setNewPaikkakunta={ setNewPaikkakunta}
          setNewLippulinkki={ setNewLippulinkki}
          setNewGenre={ setNewGenre}
          setNewArtistilinkki={ setNewArtistilinkki}/><button onClick={addMusic}>Lisää keikka</button></div>}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}