import { useState, useEffect }
from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
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
            }, [pokemon]);
            return (
                    <>
                    <header className='navbar sticky-top'>
                        <nav className='container'>
                            <div className='d-inline-block'>
                                <div className='d-inline-block'>
                                    <a className='navbar-brand d-inline-block' href="https://vitejs.dev" target="_blank">
                                        <img src={viteLogo} className="logo align-text-top" alt="Vite logo"  />
                                    </a>
                                    <a className='navbar-brand' href="https://react.dev" target="_blank">
                                        <img src={reactLogo} className="logo react align-text-top" alt="React logo"  />
                                    </a>
                                </div>
                                <h1 className='d-inline-block align-text-top'>Vite + React</h1>
                                <div className='appcard d-inline-block align-text-top'>
                                    <button onClick={() => setContador((contador) => contador + 1)}>
                                        Contador es {contador}
                                    </button>
                                    <p>
                                        Edit <code>src/App.jsx</code> and save to test HMR
                                    </p>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className='album'>
                        <div className='container mb-2'>
                            <div className='row align-items-start justify-content-center'>
                                {pokemon.filter((item, indice) => indice < contador).map((d, i) => (
                                                <div className='col col-auto border border-dark-subtle rounded-4 g-1' key={i}>
                                                    <Pokecard
                                                        name={d.name}
                                                        pokemon={d.url}
                                                        />
                                                </div>
                                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                    </>
                    );
        }

export default App
