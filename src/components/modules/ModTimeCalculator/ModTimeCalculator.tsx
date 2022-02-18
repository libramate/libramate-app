import * as React from "react";

import "./ModTimeCalculator.scss";

export class ModTimeCalculator extends React.Component {
  render() {
    return (
      <div className="mod-time-calculator">
        <h1>Time Calculator</h1>
        <form>
          <input type="number" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
