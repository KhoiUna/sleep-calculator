import "./App.css";
import Results from "./components/Results";
import { useState } from "react";
import calcSleepTimes from "./helpers/calcSleepTimes";

function App() {
  const [results, setResults] = useState([]);

  const [wakingTime, setWakingTime] = useState({
    hour: 0,
    minute: 0,
    time: "AM",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setWakingTime((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sleepingTimes = calcSleepTimes(wakingTime);
    setResults(sleepingTimes);
  };

  return (
    <div className="App">
      <header>
        <h2>SLEEP CALCULATOR</h2>
      </header>

      <main>
        <h2 className="title">SET YOUR WAKE UP TIME:</h2>

        <div id="form-container">
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <div id="inputs">
              <label htmlFor="hour">
                <input
                  required
                  type="number"
                  id="hour"
                  name="hour"
                  value={wakingTime.hour}
                  min={1}
                  max={12}
                />
              </label>
              <span id="colon">:</span>

              <label htmlFor="minute">
                <input
                  required
                  type="number"
                  id="minute"
                  name="minute"
                  value={wakingTime.minute}
                  min={0}
                  max={59}
                />
              </label>

              <label htmlFor="time">
                <select id="time" name="time" required>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </label>
            </div>

            <button>CALCULATE</button>
          </form>
        </div>

        {results.length > 0 && <Results results={results} />}
      </main>
    </div>
  );
}

export default App;
