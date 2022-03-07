import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase";

const SessionValidator: FC = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      void router.push("/");
    }
  }, [user]);

  return <></>;
};

export default SessionValidator;
