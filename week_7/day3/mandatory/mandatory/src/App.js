// App.js
import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Color from './Components/Color';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  

  render() {
    if (this.state.count === 5) {
      throw new Error('I crashed!');
    }

    return (
      <h1 onClick={this.handleClick}>
        {this.state.count}
      </h1>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/*} <ErrorBoundary>
       <BuggyCounter />
       <BuggyCounter />
      </ErrorBoundary>{*/}
      {/*} si une erreur est lancée, le composant ErrorBoundary l'attrape et affiche un message d'erreur mais aussi tout le 
      programe ce plante {*/}
      <ErrorBoundary>
       <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
       <BuggyCounter />
      </ErrorBoundary>
      {/*} si une erreur est lancée, le composant ErrorBoundary l'attrape et affiche un message d'erreur mais le programe
      ne ce plante pas {*/}
      <BuggyCounter />
      <BuggyCounter />
      {/*} si une erreur est lancée is crache tout le programe ce plante{*/}
      <ErrorBoundary>
        <Color />
      </ErrorBoundary>

    </div>
  );
}

export default App;
