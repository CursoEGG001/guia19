import './App.css';
import { Header } from './components/public/Header'
import { Main } from './components/public/Main'
import { Footer } from './components/public/Footer'

        function App() {
            return (
                    <div className="App">
                    
                        <Header title="Navbar Incompleta" />
                        <Main nombre="Main" />
                        <Main nombre="El segundo"/>
                        <Footer text="Footer" />
                    
                    </div>
                    );
        }
export default App;