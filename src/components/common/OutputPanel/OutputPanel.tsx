import * as React from "react";

import "./OutputPanel.scss";

export interface propsOutputPanel {
  headline: String;
  subtitle: String;
  tableContent: rowOutputTable[];
}

function Header(props: { headline: String; subtitle: String }) {
  return (
    <div>
      <h2>{props.headline}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}

interface rowOutputTable {
  name: string;
  time: string;
}

function OutputTable(props: { values: rowOutputTable[] }) {
  let tableValues = props.values.map((value) => {
    return (
      <tr key={value.name}>
        <td>{value.name}</td>
        <td>{value.time}</td>
      </tr>
    );
  });

  return (
    <table id="output-table">
      <tbody>{tableValues}</tbody>
    </table>
  );
}

export class OutputPanel extends React.Component<propsOutputPanel, {}> {
  render() {
    return (
      <div id="div-output">
        <Header headline={this.props.headline} subtitle={this.props.subtitle} />
        <OutputTable values={this.props.tableContent} />
      </div>
    );
  }
}
