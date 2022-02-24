import { ShieldErrorFilled } from "@fluentui/react-icons";
import GenericError, { GenericErrorProps } from "./GenericError";

export default function AuthAccessDenied() {
  const errorProps: GenericErrorProps = {
    title: "Access Denied",
    message: "Please try authentificating again.",
    buttonNavigateTo: "/login",
    buttonText: "Back",
    icon: <ShieldErrorFilled />,
  };

  return <GenericError {...errorProps} />;
}
