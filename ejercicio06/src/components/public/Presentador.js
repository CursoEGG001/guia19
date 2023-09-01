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
            <div>
                <h1>Personajes de Rick and Morty</h1>
                <div className='container'>
                    <div className='row align-items-start justify-content-center'> 
                        <div className='col-1'>
                            <ul className='list-group'>
                                {characters.map((character) => (
                                        <li className='App-logo list-group-item focus-ring fs-2 order-{character.id}' key={character.id}>{character.name}</li>
                                                        ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            );
};
