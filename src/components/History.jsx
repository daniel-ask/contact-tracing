import React, { Component } from "react";

export default class History extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>DISPLAY HISTORY COMING SOON</h2>
        <table>
          <tr>
            <th>Date</th>
            <th>Street Number</th>
            <th>Street Address</th>
            <th>Suburb</th>
          </tr>
          {data.map((location) => {
            return (
              <tr key={location.date}>
                <td>{location.date}</td>
                <td>{location.streetNumber}</td>
                <td>{location.streetAddress}</td>
                <td>{location.suburb}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
