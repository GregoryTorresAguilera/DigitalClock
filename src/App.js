
import './App.css';
import DigitalClock from './Components/DigitalClock.jsx'
import Countdown from './Components/Countdown.jsx'
import Stopwatch from './Components/Stopwatch.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DigitalClock />
      <Countdown />
      <Stopwatch />
        
       
      </header>
    </div>
  );
}

export default App;
