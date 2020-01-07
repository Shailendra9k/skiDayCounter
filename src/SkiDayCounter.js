import React, { Component } from "react";

class SkiDayCounter extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <p>Total Days: {this.props.total}</p>
          </div>
          <div>
            <p>Powder Days: {this.props.powder}</p>
          </div>
          <div>
            <p>Backcountry Days: {this.props.backcountry}</p>
          </div>
          <div>
            <p>Goal Days: {this.props.goal}</p>
          </div>
        </section>
      </div>
    );
  }
}
export default SkiDayCounter;
