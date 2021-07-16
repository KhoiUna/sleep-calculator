import "./Results.css";

export default function Results({ results }) {
  return (
    <>
      <h2 className="title">TRY TO SLEEP AT THESE TIMES:</h2>

      <ul id="sleep-times">
        {results.map((time, index) => (
          <li key={index}>
            <p>{time}</p>
          </li>
        ))}
      </ul>

      <h3 className="title" id="note">
        * <span style={{ textDecoration: "2px underline" }}>Note:</span> Please
        keep in mind that you should be falling asleep at these times.
        <br />
        The average human takes 14 minutes to fall asleep, so plan accordingly!
      </h3>

      <h3 className="title" id="greet">
        ~ Have a good night ! ~
      </h3>
    </>
  );
}
