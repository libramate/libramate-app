import { GetServerSideProps, NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import CustomHead from "../../common/components/Head/Head";

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

type AuthProviderButtonProps = { name: string; id: string };

const AuthProviderButton: FC<AuthProviderButtonProps> = ({ name, id }) => {
  const router = useRouter();
  let { callbackUrl } = router.query;
  if (!callbackUrl) {
    callbackUrl = "https://libramate.de/";
  } else if (typeof callbackUrl !== "string") {
    callbackUrl = callbackUrl[0];
  }

  return (
    <LoginButton
      onClick={(): void => {
        void signIn(id, {
          callbackUrl: `${callbackUrl as string}library`,
        });
      }}
    >
      <span className="ml-4">{name}</span>
    </LoginButton>
  );
};

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

const SignIn: NextPage<{ providers: { name: string; id: string }[] }> = ({
  providers,
}) => (
  <>
    <CustomHead title="Login" />
    <main className="text-center h-full">
      <h1 className="text-4xl font-bold m-0 pt-20 pb-8 px-8 border-b-border shadow-elevation-2 bg-e-1">
        Choose Authentication Provider
      </h1>
      <div className="px-8 mt-16 w-full grid auto-rows-[5rem] overflow-auto">
        {Object.values(providers).map((provider) => (
          <AuthProviderButton key={provider.id} {...provider} />
        ))}
        <BackButton />
      </div>
    </main>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
