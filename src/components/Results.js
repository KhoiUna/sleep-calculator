import "./Results.css";

export default function Results({ results }) {
  return (
    <>
      <h2>TRY TO SLEEP AT THESE TIMES:</h2>

      <ul id="sleep-times">
        {results.map((time, index) => (
          <li key={index}>
            <p>{time}</p>
          </li>
        ))}
      </ul>

      <h3 id="greet">~ Have a good night! ~</h3>
    </>
  );
}
