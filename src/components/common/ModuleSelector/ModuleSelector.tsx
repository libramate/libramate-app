import * as React from "react";
import {
  AddSubtractCircle24Regular,
  Timer24Regular,
} from "@fluentui/react-icons";

import "./ModuleSelector.scss";

interface propsModuleButton {
  icon: React.ReactElement;
  label: String;
}

function ModuleButton(props: propsModuleButton) {
  return (
    <button className="btn-module-select">
      {props.icon}
      <p>{props.label}</p>
    </button>
  );
}

export class ModuleSelector extends React.Component {
  render() {
    return (
      <div id="module-selector">
        <ModuleButton
          icon={<Timer24Regular color="var(--color-font)" />}
          label="Time"
        />
        <ModuleButton
          icon={<AddSubtractCircle24Regular color="var(--color-font)" />}
          label="Difference"
        />
      </div>
    );
  }
}
