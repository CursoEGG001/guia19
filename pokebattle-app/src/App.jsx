import { useEffect, useState }
from 'react';
import './App.css';
function App() {
//const [pokemones, setPokemones]=useState([]);
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
//     var v3= cargarData(vector1) 
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


//const miArray = [1, 2, 3, 4, 5];
//
//const primerElemento = miArray.shift(); // Elimina y devuelve 1
//
//console.log(miArray); // [2, 3, 4, 5]
//console.log(primerElemento); // 1

    function lucha(jugador1, jugador2, opc) {
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
        console.log(jugador1);
        console.log(jugador2);
    }


    const ComparaCartas = (evento) => {
        const elemento = evento.target;
        //console.log(jugador1[0].stats[0].stat.name)
        let infoSelector = elemento.attributes.name.value;
        for (var i = 0, max = jugador1[0].stats.length; i < max; i++) {
            if (jugador1[0].stats[i].stat.name === infoSelector) {
                console.table(infoSelector, jugador1[0].stats[i].base_stat, jugador2[0].stats[i].base_stat);
                console.log(jugador1);
                console.log(jugador2);
                lucha(jugador1, jugador2, infoSelector);
            }

        }

    };





//const cargarData=(vector) =>{
//    console.log(vector);
//    const template=document.querySelector(".foto").setAttribute('src', vector[0].sprites.other.dream_world.front_default);
//    const name=document.querySelector(".name").innerHTML=`${vector[0].name} <br> id=${vector[0].id}`;
//    const template2=document.querySelector(".foto2").setAttribute('src', vector[1].sprites.other.dream_world.front_default);
//    const name2=document.querySelector(".name2").innerHTML=`${vector[1].name} <br> id=${vector[1].id}`;
//    const name3=document.querySelector(".cantidadC1").innerHTML="Quedan " + vector.length+  " cartas disponibles";
//    const name4=document.querySelector(".cantidadC2").innerHTML="Quedan " + vector.length+  " cartas disponibles";
//   var vectorA=vector.slice(0,5);
//  
//    console.log(vectorA)
//   var  vectorB=vector.slice(5,10)
//  
//    console.log(vectorB)
//   vectorB=vectorB.concat(vectorA.slice(0,1))
//   console.log(vectorB)
//    vectorA.shift();
//    console.log(vectorA)
//    return vector;}



    return (
            <div className="App">
                <h1>Jugador 1</h1>
                {jugador1.map((jugador1) => <>
                <p key='{jugador1.id}'>{jugador1.name}</p>
                <br></br>
                <img src = {jugador1.sprites.other.dream_world.front_default} alt = {jugador1.name} />
                <span>{jugador1.lenght}</span>
                <ul>
                    <li>{jugador1.stats[0].stat.name}:{jugador1.stats[0].base_stat}</li>
                    <li>{jugador1.stats[1].stat.name}:{jugador1.stats[1].base_stat}</li>
                    <li>{jugador1.stats[2].stat.name}:{jugador1.stats[2].base_stat}</li>
                    <li>{jugador1.stats[3].stat.name}:{jugador1.stats[3].base_stat}</li>
                    <li>{jugador1.stats[4].stat.name}:{jugador1.stats[4].base_stat}</li>
                    <li>{jugador1.stats[5].stat.name}:{jugador1.stats[5].base_stat}</li>
                </ul>
                <span>{jugador1.lenght}</span>
                </>)}
                <div>
                    <table>
                        <tbody>
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
                <h1>Jugador 2</h1>
                {jugador2.map((jugador2) => <>
                <p key='{jugador2.id}'>{jugador2.name}</p>
                <br></br>
                <img src = {jugador2.sprites.other.dream_world.front_default} alt = {jugador2.name} />
                <ul>
                    <li>{jugador2.stats[0].stat.name}:{jugador2.stats[0].base_stat}</li>
                    <li>{jugador2.stats[1].stat.name}:{jugador2.stats[1].base_stat}</li>
                    <li>{jugador2.stats[2].stat.name}:{jugador2.stats[2].base_stat}</li>
                    <li>{jugador2.stats[3].stat.name}:{jugador2.stats[3].base_stat}</li>
                    <li>{jugador2.stats[4].stat.name}:{jugador2.stats[4].base_stat}</li>
                    <li>{jugador2.stats[5].stat.name}:{jugador2.stats[5].base_stat}</li>
                </ul>
                <span>{jugador2.lenght}</span>
                </>)}
            </div>
            );
}

export default App;