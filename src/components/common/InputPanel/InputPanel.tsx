import * as React from "react";
import { ModTimeCalculator } from "../../modules/ModTimeCalculator/ModTimeCalculator";
import { ModuleSelector } from "../ModuleSelector/ModuleSelector";
import { OutputPanel } from "../OutputPanel/OutputPanel";

import "./InputPanel.scss";

export class InputPanel extends React.Component {
  render() {
    const dummyValues = [
      {
        name: "DSL",
        time: "3sek",
      },
      {
        name: "DSL2",
        time: "3sek",
      },
      {
        name: "DSL3",
        time: "3sek",
      },
      {
        name: "DSL4",
        time: "3sek",
      },
      {
        name: "DSL5",
        time: "3seek",
      },
    ];

    return (
      <div id="div-input">
        <div className="module-wrapper">
          <ModTimeCalculator />
          <OutputPanel
            headline="3min"
            subtitle="WAYYYY Faster"
            tableContent={dummyValues}
          />
        </div>
        <ModuleSelector />
      </div>
    );
  }
}
