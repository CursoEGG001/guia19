import logo from './logo.svg';
import './App.css';
import {Presentador} from './components/public/Presentador'

        function App() {
            return (
                    <div className="App">
                        <header className="App-header">
                            <Presentador />
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Sigue girando
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Aprende React
                            </a>
                    
                        </header>
                    </div>
                    );
        }

export default App;
