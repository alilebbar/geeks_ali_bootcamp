import React from "react";

export default class Exemple2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h2>{this.props.titre}</h2>
        <ul>
          {this.props.skillSet.map((e) => {
            return <li>{e.Name}</li>;
          })}
        </ul>
      </>
    );
  }
}
