import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/common/Loading/Loading";

export default function Authentificating() {
  const location = useLocation();
  const navigate = useNavigate();
  const code = location.search.split("=")[1];

  setTimeout(() => {
    navigate("/library");
  }, 5000);
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <Loading />
    </div>
  );
}
