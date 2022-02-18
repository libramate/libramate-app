import { Book24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import "./NavBar.scss";

interface IconButtonProps {
  icon: React.ReactElement;
  label: string;
  link: string;
}

function IconButton(props: IconButtonProps) {
  return (
    <Link to={`/${props.link}`}>
      <button className="btn-icon" onClick={(event) => {}}>
        {props.icon}
        <p>{props.label}</p>
      </button>
    </Link>
  );
}

function ScanButton() {}

export default function NavBar() {
  return (
    <nav id="navbar">
      <IconButton
        icon={<Book24Regular color="var(--color-font)" />}
        label="Library"
        link="library"
      />
      <IconButton
        icon={<Book24Regular color="var(--color-font)" />}
        label="Library"
        link="library"
      />
      <IconButton
        icon={<Book24Regular color="var(--color-font)" />}
        label="Library"
        link="library"
      />
      <IconButton
        icon={<Book24Regular color="var(--color-font)" />}
        label="Library"
        link="library"
      />
      <IconButton
        icon={<Book24Regular color="var(--color-font)" />}
        label="Library"
        link="library"
      />
    </nav>
  );
}
