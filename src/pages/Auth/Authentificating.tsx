import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../components/common/Loading/Loading";

export default function Authentificating() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const error = searchParams.get("error");
  const code = searchParams.get("code");

  useEffect(() => {
    if (error) {
      navigate("/auth/accessDenied");
    }
    setTimeout(() => {
      navigate("/library");
    }, 5000);
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
