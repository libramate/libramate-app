import type { NextPage } from "next";
import { useRouter } from "next/router";
import Logo from "../../public/logo";
import CustomHead from "../common/components/Head/Head";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <CustomHead />
      <main className="h-screen">
        <div className="h-1/2">
          <div className="h-1/2 w-full flex items-center justify-center bg-gradient-to-b from-logo-from to-logo-to">
            <Logo className="h-full w-full p-6" />
          </div>
          <svg viewBox="0 0 642 117" version="1.1" className="h-1/2 w-full">
            <g transform="matrix(1,0,0,-1,-281.94,120)">
              <path
                d="M602.45,3.86C602.45,3.86 572.9,116.24 281.94,120L923,120C632,116.24 602.45,3.86 602.45,3.86Z"
                className="fill-logo-to"
              />
            </g>
          </svg>
        </div>
        <div className="text-center py-0 px-8">
          <h1 className="mb-12 text-4xl font-bold">Welcome to LibraMate</h1>
          <button
            className="border-border rounded-lg text-2xl  bg-accent font-bold py-4 px-8 min-w-[20%]"
            onClick={(): void => {
              void router.push("/auth/signin");
            }}
          >
            Login
          </button>
        </div>
      </main>
    </>
  );
};
export default Home;
