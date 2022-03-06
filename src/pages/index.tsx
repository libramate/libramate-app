import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FC } from "react";
import Logo from "../../public/logo";
import CustomHead from "../common/components/Head/Head";

type ServerButtonProps = {
  text: string;
  className?: string;
  onClick: () => void;
};

const ServerButton: FC<ServerButtonProps> = ({ text, className, onClick }) => (
  <button
    className={`border-border rounded-lg w-full h-12 text-lg mb-4 ${
      className || ""
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <CustomHead />
      <main className="h-screen">
        <div>
          <div className="h-[min(50vh,25rem)] w-full flex items-center justify-center bg-gradient-to-b from-logo-from to-logo-to">
            <Logo className="w-40 h-40" />
          </div>
          <svg viewBox="0 0 642 117" version="1.1">
            <g transform="matrix(1,0,0,-1,-281.94,120)">
              <path
                d="M602.45,3.86C602.45,3.86 572.9,116.24 281.94,120L923,120C632,116.24 602.45,3.86 602.45,3.86Z"
                className="fill-logo-to"
              />
            </g>
          </svg>
        </div>
        <div className="text-center py-0 px-8">
          <h1 className="mb-12 text-4xl font-bold">Log In</h1>
          <ServerButton
            text="Use libramate.de"
            onClick={(): void => void router.push("/login")}
            className="bg-accent"
          />
          <ServerButton
            text="Use custom server"
            onClick={(): void => void signIn()}
            className="bg-e-1"
          />
        </div>
      </main>
    </>
  );
};
export default Home;
