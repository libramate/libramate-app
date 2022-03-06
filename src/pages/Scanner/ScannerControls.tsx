import {
  ArrowLeft24Regular,
  CameraSwitch24Regular,
  Edit24Regular,
  Flashlight24Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

export interface ScannerControlsProps {
  switchCamera: () => void;
  switchTorch: () => void;
}

export default function ScannerControls(
  props: ScannerControlsProps
): JSX.Element {
  const navigate = useNavigate();

  return (
    <div id="scanner-controls">
      <button id="btn-back" onClick={(): void => navigate("/library")}>
        <ArrowLeft24Regular />
      </button>
      <div id="ctrl-bottom">
        <button onClick={props.switchTorch}>
          <Flashlight24Regular />
        </button>
        <button>
          <Edit24Regular />
        </button>
        <button onClick={props.switchCamera}>
          <CameraSwitch24Regular />
        </button>
      </div>
    </div>
  );
}
