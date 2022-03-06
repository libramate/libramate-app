import { FC, ReactNode } from "react";
import NavBar from "./Navbar";

type LayoutProps = {
  children?: ReactNode;
  className?: string;
};

export const NavLayout: FC<LayoutProps> = ({ children, className }) => (
  <>
    <main className={`overflow-auto h-full ${className || ""}`}>
      {children}
    </main>
    <NavBar />
  </>
);
