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
                .then((data) => setCharacters(data.results.slice(0, 22)))
                .catch((error) => console.log(error));
    }, []);
    return (
            <div className='album'>
                <h1>Personajes de Rick and Morty</h1>
                <div className='container'>
                    <div className='row align-items-start justify-content-center'> 
                        {characters.map((character) => (
                                        <div className='col cols-auto'>
                                            <div className='container  mb-4'>
                                                <div className='card focus-ring' style={{width: '18rem'}}>  
                                                    <img src={character.image} className="App-logo card-img" alt={character.status}></img>
                                                    <div className='card-body card-img-overlay'>
                                                        <h5 className="card-title fs-4 text-primary bg-warning bg-gradient text-emphasis-primary">{character.name}</h5>
                                                        <p className="card-text badge bg-secondary">{character.species}</p>
                                                    </div>
                                                    <ul className='list-group list-group-flush'>
                                                        <li className='list-group-item' key={character.id}>{character.origin.name}</li>
                                                    </ul>
                                                    <div className='card-body'>
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
