import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC } from "react";

const SessionValidator: FC = () => {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      void router.push("/");
    },
  });

  return <></>;
};

export default SessionValidator;
