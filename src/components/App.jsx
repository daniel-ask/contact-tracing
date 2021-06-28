import React, { Component } from "react";
import Form from "./Form";
import History from "./History";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: new Date().toLocaleString(),
          streetNumber: 120,
          streetAddress: "Spencer Street",
          suburb: "Melbourne",
        },
      ],
    };
		this.addLocation = this.addLocation.bind(this);
  }

  addLocation(location) {
		console.log(location)
    this.setState({
      data: [
        location, ...this.state.data
      ],
    });
  }
  render() {
		console.log(this.state.data);
    return (
      <div>
        <h1>Contact Tracing</h1>
        <Form addLocation={this.addLocation} />
        <History data={this.state.data} />
      </div>
    );
  }
}
