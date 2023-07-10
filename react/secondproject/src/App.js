import './App.css';
import Video from './components/Video';
function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Hello World</h1>
        <section><Video bgc="pink" country="Bhutan"/><Video bgc="green" country="Nepal"/><Video bgc="yellow" country="Bangladesh"/></section>
        <Demo/>
      </div>
    </div>
  );
}

function Demo() {
  let c = 'Bhutan'
  return(
    <div>
      Namaste {c}
    </div>
  )
}

export default App;
