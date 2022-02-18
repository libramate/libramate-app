import { BarcodeScanner24Filled, Book24Regular } from "@fluentui/react-icons";
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
      <button className="btn-icon btn-link">
        {props.icon}
        <div>{props.label}</div>
      </button>
    </Link>
  );
}

function ScanButton() {
  return (
    <Link to="scan">
      <button className="btn-scan btn-link">
        <BarcodeScanner24Filled />
      </button>
    </Link>
  );
}

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
      <ScanButton />
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
