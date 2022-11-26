import "./App.scss";
import CountDown from "./components/CountDown";
import DigitalClock from "./components/DigitalClock";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <div className="app">
      <main className="main">
        <h1>myClock</h1>
        <div className="projects">
          <DigitalClock />
          <CountDown />
          <StopWatch />
        </div>
      </main>
      <footer>
        <h3>madeWithREACT</h3>
        <h4>marioSepulveda</h4>
      </footer>
    </div>
  );
}

export default App;
