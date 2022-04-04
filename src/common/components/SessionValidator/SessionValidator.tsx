import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase";

const SessionValidator: FC = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      void router.push("/");
    }
  }, [user, loading, router]);

  return <></>;
};

export default SessionValidator;
