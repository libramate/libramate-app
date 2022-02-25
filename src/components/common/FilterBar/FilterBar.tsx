import { Filter24Regular, Person24Regular } from "@fluentui/react-icons";
import "./FilterBar.scss";

export default function FilterBar(props: { idPrefix: string }): JSX.Element {
  return (
    <div id={`${props.idPrefix}-filter-bar`} className="filter-bar">
      <button className="icon-button">
        <Person24Regular />
      </button>
      <input type="search" placeholder="Search" />
      <button className="icon-button">
        <Filter24Regular />
      </button>
    </div>
  );
}
