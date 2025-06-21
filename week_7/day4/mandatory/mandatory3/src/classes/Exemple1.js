import React from "react";

export default class Exemple1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <li>
          <a href={this.props.link}>{this.props.link}</a>
        </li>
      </>
    );
  }
}
