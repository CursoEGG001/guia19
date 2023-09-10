/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 
 * 
 */
import React, {useState, useEffect} from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';

const Pokecard = (props) => {
    const [tarjeta, setTarjeta] = useState([]);
    const [figPok, setFigPok] = useState("");
    useEffect(() => {
        const charactersAPI = fetch(props.pokemon)
                .then((response) => response.json())
                .then((data) => {
                    var dCartas = [];
                    const entries = Object.entries(data.stats);
                    const values = entries.map(entry => [("[" + entry[1].stat.name + "]"), (entry[1].base_stat)]);
                    dCartas.push(values);
                    setTarjeta(dCartas.flat());
                    setFigPok(data.sprites.front_default);
                })
                .catch((error) => console.log(error));

    }, []);
    return (
            <div className='col cols-auto border border-dark-subtle rounded-4'>
                <div className='card focus-ring'>
                    <div className='card-body bg-secondary-subtle rounded-3'>
                        <CardTitle title={props.name}/>
                        <br/>
                        <img className="card-img-top" src={figPok} alt={props.pokemon}/>
                        <CardBody info={tarjeta}/>
                    </div>
                </div>
            </div>

            );
};
export default Pokecard;