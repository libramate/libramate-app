import { Book24Regular } from "@fluentui/react-icons";
import "./NavBar.scss";

interface IconButtonProps {
  icon: React.ReactElement;
  label: string;
  link: string;
}

function IconButton(props: IconButtonProps) {
  return (
    <button className="btn-icon">
      {props.icon}
      <p>{props.label}</p>
    </button>
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
