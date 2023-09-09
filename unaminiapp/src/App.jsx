import { useState, useEffect }
from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokedexServicio from './services/pokemon-api'
import Pokecard from './components/public/Pokecard'

        function App() {
            const [contador, setContador] = useState(0);
            const [pokemon, setPokemon] = useState([]);
            useEffect(() => {
                // Llamamos a la API Pokeapi
                const charactersAPI = PokedexServicio.getAllCharacters()
                        .then((data) => setPokemon(data.results))
                        .catch((error) => console.log(error));
            }, []);
            return (
                    <>
                    <div>
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={viteLogo} className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </div>
                    <h1>Vite + React</h1>
                    <div>
                        <div className='card'>
                            <button onClick={() => setContador((contador) => contador + 1)}>
                                Contador es {contador}
                            </button>
                            <p>
                                Edit <code>src/App.jsx</code> and save to test HMR
                            </p>
                            {pokemon.map((d,i) => (
                                                        <div key={i}>
                                                            <Pokecard
                                                                name={d.name}
                                                                pokemon={d.url}
                                                                />
                                                        </div>
                                    ))}
                        </div>
                    </div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                    </>
                    );
        }

export default App
