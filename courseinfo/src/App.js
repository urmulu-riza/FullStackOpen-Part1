const Header = ({ course }) => <h1>{course}</h1>;
const Total = ({ parts }) => (
  <p>
    Number of exercises{' '}
    {parts.map((p) => p.exercises).reduce((a, cv) => a + cv)}
  </p>
);
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((p, i) => (
      <Part key={i} name={p.name} exercises={p.exercises} />
    ))}
  </>
);

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
