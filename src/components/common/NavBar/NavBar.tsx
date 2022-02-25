import {
  BarcodeScanner24Filled,
  Book24Filled,
  Book24Regular,
  PeopleSwap24Filled,
  PeopleSwap24Regular,
  Person24Regular,
  Settings24Filled,
  Settings24Regular,
} from "@fluentui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.scss";

interface IconButtonProps {
  icon: React.ReactElement;
  iconActive: React.ReactElement;
  label: string;
  link: string;
}

function IconButton(props: IconButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  let icon: React.ReactElement;
  if (location.pathname.startsWith(`/${props.link}`)) {
    icon = props.iconActive;
  } else {
    icon = props.icon;
  }
  return (
    <button
      className="btn-icon btn-link"
      onClick={() => navigate(`/${props.link}`)}
    >
      {icon}
      <span>{props.label}</span>
    </button>
  );
}

function ScanButton() {
  const navigate = useNavigate();
  return (
    <button className="btn-link btn-scan" onClick={() => navigate("/scan")}>
      <div className="btn-scan-circle">
        <BarcodeScanner24Filled color="var(--color-accent-font)" />
      </div>
      <span>{"Scan"}</span>
    </button>
  );
}

function ProfileButton() {
  const navigate = useNavigate();
  return (
    <button
      className="btn-link btn-profile"
      onClick={() => navigate("/profile")}
    >
      <Person24Regular />
      <span>{"Profile"}</span>
    </button>
  );
}

export default function NavBar() {
  return (
    <nav id="navbar">
      <IconButton
        icon={<Book24Regular color="var(--color-font)" />}
        iconActive={<Book24Filled color="var(--color-font)" />}
        label="Library"
        link="library"
      />
      <IconButton
        icon={<PeopleSwap24Regular color="var(--color-font)" />}
        iconActive={<PeopleSwap24Filled color="var(--color-font)" />}
        label="Lent"
        link="lent"
      />
      <ScanButton />
      <ProfileButton />
      <IconButton
        icon={<Settings24Regular color="var(--color-font)" />}
        iconActive={<Settings24Filled color="var(--color-font)" />}
        label="Settings"
        link="settings"
      />
    </nav>
  );
}
