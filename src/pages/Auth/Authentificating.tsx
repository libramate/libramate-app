import { useEffect } from "react";
import {
  NavigateFunction,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Loading from "../../components/common/Loading/Loading";

const timeout = 5000;

export default function Authentificating(): JSX.Element {
  const [searchParams] = useSearchParams();
  const navigate: NavigateFunction = useNavigate();

  const error: string | null = searchParams.get("error");
  const code: string | null = searchParams.get("code");

  useEffect(() => {
    if (error) {
      return navigate("/auth/accessDenied");
    }
    setTimeout(() => {
      navigate("/library");
    }, timeout);
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Loading />
    </div>
  );
}
