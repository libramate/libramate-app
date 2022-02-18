import { BarcodeScanner24Filled, Book24Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

interface IconButtonProps {
  icon: React.ReactElement;
  label: string;
  link: string;
}

function IconButton(props: IconButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      className="btn-icon btn-link"
      onClick={() => navigate(`/${props.link}`)}
    >
      {props.icon}
      <div>{props.label}</div>
    </button>
  );
}

function ScanButton() {
  const navigate = useNavigate();
  return (
    <button className="btn-scan btn-link" onClick={() => navigate("/scan")}>
      <BarcodeScanner24Filled />
    </button>
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
        link="aaa"
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
