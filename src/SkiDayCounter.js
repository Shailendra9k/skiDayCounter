import React, { Component } from "react";

class SkiDayCounter extends Component {
  render() {
    const { total, powder, backcountry, goal } = this.props;
    return (
      <div>
        <section>
          <div>
            <p>Total Days: {total}</p>
          </div>
          <div>
            <p>Powder Days: {powder}</p>
          </div>
          <div>
            <p>Backcountry Days: {backcountry}</p>
          </div>
          <div>
            <p>Goal Days: {goal}</p>
          </div>
        </section>
      </div>
    );
  }
}
export default SkiDayCounter;
