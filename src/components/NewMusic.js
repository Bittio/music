import React, {useState, useEffect} from 'react';
import '../App.css';
import Music from "./Music";
//import Karu_selli from "./components/Karu_selli"
//import images from "./components/ImageData"
import musicService from '../services/Music';
const navLinks = ["Tampere", "Helsinki", "Pori"]



const NewMusic = ({newArtisti, newTapahtuma, newMainoskuva, newKuvaus, newPvm, newAika, newOsoite, newPaikkakunta, newLippulinkki, newGenre, newArtistilinkki, setNewArtisti, setNewTapahtuma, setNewMainoskuva, setNewKuvaus, setNewPvm, 
  setNewAika, setNewOsoite, setNewPaikkakunta, setNewLippulinkki, setNewGenre, setNewArtistilinkki, submitHandler}) => {
  return (
    <div className="App">
      <form onSubmit = {e=> submitHandler(e)}>      
        Artisti: <input type="text" onChange={e=> setNewArtisti(e.target.value)}
        placeholder="Artisti" value={newArtisti}/><br></br>
        Tapahtuma: <input type="text" onChange={e=> setNewTapahtuma(e.target.value)}
        placeholder="Tapahtuma" value={newTapahtuma}/><br></br>
        Mainoskuva (linkki): <input type="text" onChange={e=> setNewMainoskuva(e.target.value)}
        placeholder="Mainoskuva" value={newMainoskuva}/><br></br>
        Kuvaus: <input type="text" onChange={e=> setNewKuvaus(e.target.value)}
        placeholder="Kuvaus" value={newKuvaus}/><br></br>
        Pvm (2019-01-24): <input type="text" onChange={e=> setNewPvm(e.target.value)}
        placeholder="Pvm" value={newPvm}/><br></br>
        Aika: <input type="text" onChange={e=> setNewAika(e.target.value)}
        placeholder="Aika" value={newAika}/><br></br>
        Osoite: <input type="text" onChange={e=> setNewOsoite(e.target.value)}
        placeholder="Osoite" value={newOsoite}/><br></br>
        Paikkakunta: <input type="text" onChange={e=> setNewPaikkakunta(e.target.value)}
        placeholder="Paikkakunta" value={newPaikkakunta}/><br></br>
        Lippulinkki (linkki): <input type="text" onChange={e=> setNewLippulinkki(e.target.value)}
        placeholder="Lippulinkki" value={newLippulinkki}/><br></br>
        Genre: <input type="text" onChange={e=> setNewGenre(e.target.value)}
        placeholder="Genre" value={newGenre}/><br></br>
        Artistin sivut (linkki): <input type="text" onChange={e=> setNewArtistilinkki(e.target.value)}
        placeholder="Artistin sivut" value={newArtistilinkki}/><br></br>
      </form>
    </div>
  );
}

export default NewMusic;