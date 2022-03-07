import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import CustomHead from "../../common/components/Head/Head";
import {
  AuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../common/components/Loading/Loading";

type LoginButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const LoginButton: FC<LoginButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="w-full bg-e-1 flex rounded-lg justify-center items-center px-4 text-lg mb-8 shadow-elevation-1"
  >
    {children}
  </button>
);

type AuthProviderButtonProps = {
  name: string;
  provider: AuthProvider;
};

const AuthProviderButton: FC<AuthProviderButtonProps> = ({
  name,
  provider,
}) => (
  <LoginButton
    onClick={(): void => {
      void signInWithRedirect(auth, provider);
    }}
  >
    <span className="">{name}</span>
  </LoginButton>
);

const BackButton: FC = () => {
  const router = useRouter();
  return (
    <LoginButton
      onClick={(): void => {
        void router.push("/");
      }}
    >
      <span>Back</span>
    </LoginButton>
  );
};

const SignIn: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      void router.push("/library");
    }
  }, [user, router]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <CustomHead title="Login" />
      <main className="text-center h-full">
        <h1 className="text-4xl font-bold m-0 pt-20 pb-8 px-8 border-b-border shadow-elevation-2 bg-e-1">
          Choose Authentication Provider
        </h1>
        <div className="px-8 mt-16 w-full grid auto-rows-[5rem] overflow-auto">
          <AuthProviderButton
            name="GitHub"
            provider={new GithubAuthProvider()}
          />
          <BackButton />
        </div>
      </main>
    </>
  );
};

export default SignIn;
