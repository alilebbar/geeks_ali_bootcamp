import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';
function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };


  return (
    <div>
      <h1>Ex1</h1>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <h1>Ex2</h1>
      <h3>{user.lastName}</h3>
      <h3>{user.firstName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <h1>Ex3</h1>
      <Exercise />
    </div>
  );
}

export default App;
