/* eslint-disable react/prop-types */
import React from "react";

export default class Help extends React.Component {
  constructor(props) {
    super(props);
    //the super keyword is used to access all the functionality of React.Component class , otherwise it results in undefined . and the props is used to access the arguements that has passed in the constructor of the React.Component class

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <center>
        <u>
          <h1 className="font-bold text-2xl">About</h1>
        </u>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          {this.state.count}
        </button>
        <h2 className="font-bold">Hii , I&#39;m {this.props.name}</h2>
        {/* in the implementation of the React.Component class constructor there might be required to access the arguements by using this keyword   */}
        <h2 className="font-bold">
          Welcome to my <i>Food Chef</i> . And what do you want to have right
          now ?
        </h2>
      </center>
    );
  }
}
