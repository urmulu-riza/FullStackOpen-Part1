import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
];
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Anecdote = ({ anecdote, votes }) => (
  <>
    <p>{anecdote}</p>
    <p>Has {votes} votes</p>
  </>
);

const App = () => {
  const rand = () => Math.floor(Math.random() * anecdotes.length);

  const [selected, setSelected] = useState(rand());
  const [vote, setVote] = useState(Array(9).fill(0));
  const addVote = () => {
    let voteCopy = [...vote];
    voteCopy[selected] += 1;
    setVote(voteCopy);
  };
  const handleClick = (type) => {
    switch (type) {
      case 'next':
        setSelected(rand());
        break;
      case 'vote':
        addVote();
        break;
      default:
        break;
    }
  };

  const maxVote = Math.max(...vote);
  const maxInd = vote.indexOf(maxVote);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote votes={vote[selected]} anecdote={anecdotes[selected]} />
      <Button handleClick={() => handleClick('next')} text={'next'} />
      <Button handleClick={() => handleClick('vote')} text={'vote'} />

      <h2>Anecdote with the most votes</h2>
      {!maxVote ? (
        <p>No votes submitted yet</p>
      ) : (
        <Anecdote votes={maxVote} anecdote={anecdotes[maxInd]} />
      )}
    </div>
  );
};

export default App;
