import { ArrowLeft24Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

export default function ScannerControls(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div id="scanner-controls">
      <button id="btn-back" onClick={(): void => navigate("/library")}>
        <ArrowLeft24Regular />
      </button>
    </div>
  );
}
