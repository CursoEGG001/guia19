/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import React, { useState, useEffect } from 'react';
import RickAndMortyServicio from '../../services/RickandMortyServicio';
export const Presentador = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        // Llamamos a la API de Rick and Morty
        const charactersAPI = RickAndMortyServicio.getAllCharacters()
                .then((data) => setCharacters(data.results.slice(0, 20)))
                .catch((error) => console.log(error));
    }, []);
    return (
            <div className='album'>
                <h1>Personajes de Rick and Morty</h1>
                <div className='container'>
                    <div className='row align-items-start justify-content-center'> 
                        {characters.map((character) => (
                                        <div className='col cols-auto'>
                                            <div className='container'>
                                                <div className='card focus-ring' style={{width: '18rem'}}>  
                                                    <img src={character.image} className="App-logo card-img-top" alt={character.status}></img>
                                                    <div clasName='card-body'>
                                                        <h5 className="card-title">{character.name}</h5>
                                                        <p className="card-text">{character.species}</p>
                                                    </div>
                                                    <ul className='list-group list-group-flush'>
                                                        <li className='list-group-item fs-2' key={character.id}>{character.origin.name}</li>
                                                    </ul>
                                                    <div clasName='card-body'>
                                                        <a href={character.location.url} className="card-link">{character.name} en Episodios</a>
                                                        <a href={character.url} className="card-link">{character.name} en URL</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                ))}
                    </div>
                </div>
            </div>
            );
};
