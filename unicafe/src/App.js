import { useState } from 'react';
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);
const Statistics = ({ good, bad, neutral }) => {
  const total = bad + good + neutral;
  return (
    <>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />

      {total > 0 ? (
        <>
          <StatisticLine text="all" value={total} />
          <StatisticLine
            text="average"
            value={((good - bad) / total).toFixed(2)}
          />
          <StatisticLine
            text="positive"
            value={`${((good * 100) / total).toFixed(2)}%`}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setFeedback = (val) =>
    val === 'good'
      ? setGood(good + 1)
      : val === 'neutral'
      ? setNeutral(neutral + 1)
      : setBad(bad + 1);
  return (
    <div>
      <h1>give feedback</h1>
      <>
        <Button
          handleClick={() => {
            setFeedback('good');
          }}
          text="good"
        />
        <Button
          handleClick={() => {
            setFeedback('neutral');
          }}
          text="neutral"
        />
        <Button
          handleClick={() => {
            setFeedback(' ');
          }}
          text="bad"
        />
      </>
      <Statistics {...{ good, bad, neutral }} />
    </div>
  );
};

export default App;
