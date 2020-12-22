import './App.css';
import shortid from 'shortid';
import Game from './components/Game';

function App() {
  const types = ['mando', 'child', 'ig11', 'cara', 'armorer', 'jawa', 'greef', 'kuill']

  return (
    <div className="App">
      
      <Game key={shortid.generate()} types={types}/>
    </div>
  );
}

export default App;
