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
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode } from "react";

interface LinkButtonProps {
  children: ReactNode;
  link: string;
  className?: string;
}

interface IconButtonProps {
  icon: ReactElement;
  iconActive: ReactElement;
  label: string;
  link: string;
}

const LinkButton: FC<LinkButtonProps> = ({ children, link, className }) => {
  const router = useRouter();

  return (
    <button
      className={`m-0 p-0 pb-[0.6rem] h-full flex flex-col justify-end items-center bg-transparent border-none cursor-pointer ${
        className || ""
      }`}
      onClick={(): void => {
        void router.push(`/${link}`);
      }}
    >
      {children}
    </button>
  );
};

const IconButton: FC<IconButtonProps> = ({ icon, iconActive, label, link }) => {
  const router = useRouter();

  const iconElement = router.pathname.startsWith(`/${link}`)
    ? iconActive
    : icon;

  return (
    <LinkButton link={link}>
      {iconElement}
      <span>{label}</span>
    </LinkButton>
  );
};

const ScanButton: FC = () => (
  <LinkButton link={"scan"} className="h-fit">
    <div className="mb-[0.2rem] bg-accent rounded-full shadow-elevation-1 flex justify-center items-center border-border">
      <BarcodeScanner24Filled className="text-accent-font h-8 w-8 m-4" />
    </div>
    <span>{"Scan"}</span>
  </LinkButton>
);

const ProfileButton: FC = () => (
  <LinkButton link={"profile"}>
    <Person24Regular />
    <span>{"Profile"}</span>
  </LinkButton>
);

const Navbar: FC = () => (
  <nav className="bg-e-1 border-t-border grid grid-cols-nav grid-rows-[4rem] justify-end items-end flex-none shadow-elevation-2 relative z-10">
    <IconButton
      icon={<Book24Regular />}
      iconActive={<Book24Filled />}
      label="Library"
      link="library"
    />
    <IconButton
      icon={<PeopleSwap24Regular />}
      iconActive={<PeopleSwap24Filled />}
      label="Lent"
      link="lent"
    />
    <ScanButton />
    <ProfileButton />
    <IconButton
      icon={<Settings24Regular />}
      iconActive={<Settings24Filled />}
      label="Settings"
      link="settings"
    />
  </nav>
);

export default Navbar;
