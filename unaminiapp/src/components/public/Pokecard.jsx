/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 
 * 
 */
import React, {useState, useEffect}
from 'react';
import PokedexServicio from '../../services/pokemon-api'
        const Pokecard = (props) => {
    const [tarjeta, setTarjeta] = useState([]);
    const [figPok, setFigPok] = useState(null);
    useEffect(() => {
        const charactersAPI = PokedexServicio.getCharacterByName(props.name)
                .then((data) => {
                    var dCartas = [];
                    const entries = Object.entries(data.stats);
                    const values = entries.map(entry => [entry[1].stat.name,entry[1].base_stat]);
                    dCartas.push(values);
                    setTarjeta(dCartas.toString());
                    setFigPok(data.sprites.front_default);
                })
                .catch((error) => console.log(error));
    }, []);
    return (
            <div>
                <p>{props.name}</p>
                <br/>
                <img src={figPok} width="48px" height="32px" alt={props.pokemon}/>
                <p>{tarjeta}</p>
            </div>
            );
};
export default Pokecard;