import React from "react";

export default class Exemple3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <img src={this.props.logo} alt="image" />
        <br />
        <a href={this.props.logo}>{this.props.companyName}</a>
        {this.props.roles.map((e) => {
          return (
            <>
              <p>
                <strong>{e.title}</strong>
              </p>
              <p>
                {e.startDate} {e.location}
              </p>
              <p> {e.description} </p>
            </>
          );
        })}
      </>
    );
  }
}
