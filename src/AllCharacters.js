// imrse
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from './constants';
import axios from 'axios'

function AllCharacters() {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        // fetch(`${API_URL}/allCharacters`)
        axios.get(`https://marvel-film-characters.com/api/allCharacters`, {
          
        })
          .then(async res => {
    
            setServerData(res.data.payload);
          }).catch((e)=>console.log(e))
    }, [])

    return (  
        <ul>
            {serverData.length > 0 ? serverData.map((character) => 
                (
                <li key={character._id}>
                    <Link to={`/mcu/${character.name}`} >{character.name}</Link>
                </li>
                )
            ) : <h1>loading...</h1>}
        </ul>
    );
}

export default AllCharacters;