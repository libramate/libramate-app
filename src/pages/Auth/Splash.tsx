import { useNavigate } from "react-router-dom";
import Logo from "../../../public/logo";
import "./Splash.scss";

export default function Splash(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div id="splash">
      <div className="logo">
        <div id="logo-wrapper">
          <Logo />
        </div>

        <svg viewBox="0 0 642 117" version="1.1">
          <g transform="matrix(1,0,0,-1,-281.94,120)">
            <path
              d="M602.45,3.86C602.45,3.86 572.9,116.24 281.94,120L923,120C632,116.24 602.45,3.86 602.45,3.86Z"
              className="shape-fill"
            />
          </g>
        </svg>
      </div>
      <div id="login-selection">
        <h1>Log In</h1>
        <button
          className="btn-server btn-main-server"
          onClick={(): void => navigate("/login")}
        >
          Use libramate.de
        </button>
        <button className="btn-server">Use custom server</button>
      </div>
    </div>
  );
}
