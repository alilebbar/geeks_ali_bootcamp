import React from 'react';

class Child extends React.Component {
  componentWillUnmount() {
    alert('Component is being unmounted');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  deleteComponent = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
        {this.state.show && <Child />}
        <button onClick={this.deleteComponent}>Delete</button>
      </div>
    );
  }
}

export default Color;
