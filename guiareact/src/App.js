import { Navbar } from './components/public/Navbar'
import { Principal } from './components/public/Principal'
import { Game } from './components/public/Game'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Principal />
      <Game />
    </div>
  );
}

export default App;
