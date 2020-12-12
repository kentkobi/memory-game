import './App.css';
import Game from './components/Game';

function App() {
  const types = ['mando', 'child', 'ig11', 'cara', 'armorer', 'jawa', 'greef', 'kuill']

  return (
    <div className="App">
      <Game types={types}/>
    </div>
  );
}

export default App;
