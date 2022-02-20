import { ShieldError24Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import "./AuthAccessDenied.scss";

export default function AuthAccessDenied() {
  const navigate = useNavigate();

  return (
    <div id="auth-access-denied">
      <ShieldError24Regular />
      <h1>Access Denied</h1>
      <p>Please try authentificating again.</p>
      <button onClick={() => navigate("/login")}>Back</button>
    </div>
  );
}
