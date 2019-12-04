import React from 'react';
import '../App.css';
const Musics = ({myMusic}) =>{
    return (
        <div className="column">
            <h2>{myMusic.artisti} - {myMusic.tapahtuma}</h2>
            <img src= {myMusic.mainoskuva}></img>     
            <p>{myMusic.kuvaus}</p>
            <p>{myMusic.pvm}  {myMusic.aika}</p>
            <p>{myMusic.osoite}, {myMusic.paikkakunta}</p>
            <p>Genre: {myMusic.genre}</p>
            <a href= {myMusic.artistilinkki}>Artistin sivut</a>
            <br></br>
            <a href= {myMusic.lippulinkki}>Liput</a>
        </div> 
    )
}

const Music = ({myMusic, setMusic}) =>{
    console.log("ready", myMusic);
    return (
        <div className="App">
            <div className="part">
                <ul className="music">
                    {myMusic.map(music=>< Musics myMusic = {music} key={myMusic.id}/>)}
                </ul>
            </div>
        </div>
    )
}
export default Music;