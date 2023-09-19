import { useEffect, useState }
from 'react';
import './App.css';
function App() {

    const [jugador1, setJugador1] = useState([]);
    const [jugador2, setJugador2] = useState([]);
    useEffect(() => {
        jugadores();
        jugadores2();
    }, []);

    var vectorF = [];
    const vector1 = [];
    const i = 0;
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const fetchData = async () => {
        try {
            for (let i = 0; i <= 21; i++) {
                const random = getRandomInt(1, 151);
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
                const data = await res.json();
                vectorF.push(data);
            }

        } catch (error) {
            console.log(error.message);
        }
        return vectorF;
    };

    const jugadores = async() => {
        setJugador1((await fetchData()).slice(0, 10));

    };
    const jugadores2 = async() => {
        setJugador2((await fetchData()).slice(11, 21));
    };

    function lucha(jugador1, jugador2, opc) {
        try {
            switch (opc) {
                case "hp":
                    if (jugador2[0].stats[0].base_stat > jugador1[0].stats[0].base_stat) {
                        jugador2.push(jugador1.shift());
                    } else {
                        jugador1.push(jugador2.shift());
                    }
                    break;
                case "attack":
                    if (jugador2[0].stats[1].base_stat > jugador1[0].stats[1].base_stat) {
                        jugador2.push(jugador1.shift());
                    } else {
                        jugador1.push(jugador2.shift());
                    }
                    break;
                case "defense":
                    if (jugador2[0].stats[2].base_stat > jugador1[0].stats[2].base_stat) {
                        jugador2.push(jugador1.shift());
                    } else {
                        jugador1.push(jugador2.shift());
                    }
                    break;
                case "special-attack":
                    if (jugador2[0].stats[3].base_stat > jugador1[0].stats[3].base_stat) {
                        jugador2.push(jugador1.shift());
                    } else {
                        jugador1.push(jugador2.shift());
                    }
                    break;
                case "special-defense":
                    if (jugador2[0].stats[4].base_stat > jugador1[0].stats[4].base_stat) {
                        jugador2.push(jugador1.shift());
                    } else {
                        jugador1.push(jugador2.shift());
                    }
                    break;
                case "speed":
                    if (jugador2[0].stats[5].base_stat > jugador1[0].stats[5].base_stat) {
                        jugador2.push(jugador1.shift());
                    } else {
                        jugador1.push(jugador2.shift());
                    }
                    break;
                    // Otros casos...
                default:
                    // Manejar un caso por defecto si es necesario
                    break;
            }
            shuffle(jugador1)
            shuffle(jugador2)
            setJugador1(jugador1);
            setJugador2(jugador2);
        } catch (e) {
            console.log("Ya no se puede operar")
            console.log(e.message)
        }

    }

    const ComparaCartas = (evento) => {
        try {
            const elemento = evento.target;
            let infoSelector = elemento.attributes.name.value;
            if ((jugador1.length > 0) && (jugador2.length > 0)) {
                for (var i = 0, max = jugador1[0].stats.length; i < max; i++) {
                    if (jugador1[0].stats[i].stat.name === infoSelector) {
                        console.table(infoSelector, jugador1[0].stats[i].base_stat, jugador2[0].stats[i].base_stat);
                        console.log(jugador1);
                        console.log(jugador2);
                        lucha(jugador1, jugador2, infoSelector);
                        console.log(jugador1);
                        console.log(jugador2);
                    }
                }
            } else {
                if (jugador1.length === 0) {
                    console.log("Gana el jugador 2")
                } else {
                    console.log("Gana el jugador 1")
                }

            }
        } catch (e) {
            console.log("no hay mas cartas de algún jugador")
            console.log(e.message)
        }

    };

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return (
            <div className="App">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td rowSpan='0'><h1>Jugador 1</h1>
                                    {jugador1.filter((a, i) => i == 0).map((jugador1) => <>
                                    <h3>{jugador1.name}</h3>
                                    <br></br>
                                    <img src = {jugador1.sprites.other.dream_world.front_default} alt = {jugador1.name} width="64px" height="48px" />
                                    <span>{jugador1.lenght}</span>
                                    <ul>
                                        <li >{jugador1.stats[0].stat.name}:{jugador1.stats[0].base_stat}</li>
                                        <li >{jugador1.stats[1].stat.name}:{jugador1.stats[1].base_stat}</li>
                                        <li >{jugador1.stats[2].stat.name}:{jugador1.stats[2].base_stat}</li>
                                        <li >{jugador1.stats[3].stat.name}:{jugador1.stats[3].base_stat}</li>
                                        <li >{jugador1.stats[4].stat.name}:{jugador1.stats[4].base_stat}</li>
                                        <li >{jugador1.stats[5].stat.name}:{jugador1.stats[5].base_stat}</li>
                                    </ul>
                                    <span>{jugador1.lenght}</span>
                                    </>)}</td>
                                <td><h3>Acciones</h3></td>
                                <td rowSpan='0'><h1>Jugador 2</h1>
                                    {jugador2.filter((a, i) => i == 0).map((jugador2) => <>
                                    <h3>{jugador2.name}</h3>
                                    <br></br>
                                    <img src = {jugador2.sprites.other.dream_world.front_default} alt = {jugador2.name} width="64px" height="48px" />
                                    <ul>
                                        <li >{jugador2.stats[0].stat.name}:{jugador2.stats[0].base_stat}</li>
                                        <li >{jugador2.stats[1].stat.name}:{jugador2.stats[1].base_stat}</li>
                                        <li >{jugador2.stats[2].stat.name}:{jugador2.stats[2].base_stat}</li>
                                        <li >{jugador2.stats[3].stat.name}:{jugador2.stats[3].base_stat}</li>
                                        <li >{jugador2.stats[4].stat.name}:{jugador2.stats[4].base_stat}</li>
                                        <li >{jugador2.stats[5].stat.name}:{jugador2.stats[5].base_stat}</li>
                                    </ul>
                                    <span>{jugador2.lenght}</span>
                                    </>)}</td>
                            </tr>
                            <tr>
                                <td><input name="hp" type="submit" value="HP" onClick={ComparaCartas}/></td>
                            </tr>
                            <tr>
                                <td ><input name="attack" type="submit" value="Ataque" onClick={ComparaCartas} /></td>
                                <td ></td>
                            </tr>
                            <tr>
                                <td ><input name="defense" type="submit" value="Defensa" onClick={ComparaCartas} /></td>
                            </tr>
                            <tr>
                                <td ><input name="special-attack" type="submit" value="Ataque Especial" onClick={ComparaCartas}/></td>
                            </tr>
                            <tr>
                                <td ><input name="special-defense" type="submit" value="Defensa Especial" onClick={ComparaCartas}/></td>
                            </tr>
                            <tr>
                                <td ><input name="speed" type="button" value="Velocidad" onClick={ComparaCartas}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
            </div>
            );
}

export default App;