import { ErrorCircleFilled } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import "./GenericError.scss";

export interface GenericErrorProps {
  icon?: JSX.Element;
  title: string;
  message: string;
  buttonText?: string;
  buttonNavigateTo?: string;
}

export default function GenericError(props: GenericErrorProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div id="generic-error-page">
      {props.icon || <ErrorCircleFilled />}
      <div>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
      </div>
      <button onClick={(): void => navigate(props.buttonNavigateTo || "/")}>
        {props.buttonText || "Back"}
      </button>
    </div>
  );
}
