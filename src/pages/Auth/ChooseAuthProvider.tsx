import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthProviderService, {
  AuthProvider,
} from "../../services/AuthProviderService";
import "./ChooseAuthProvider.scss";

function AuthButton(props: AuthProvider) {
  return (
    <button
      onClick={() => {
        window.location.href = props.url;
      }}
      className="btn-auth-provider"
    >
      <img src={props.img}></img>
      <span>{props.name}</span>
    </button>
  );
}

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/");
      }}
      className="btn-auth-provider"
    >
      <span>Back</span>
    </button>
  );
}

export default function ChooseAuthProvider() {
  const [state, setState] = useState<{ providers: AuthProvider[] }>({
    providers: [],
  });

  useEffect(() => {
    AuthProviderService.getAuthProviders("").then((providers) =>
      setState({ providers })
    );
  });

  return (
    <div id="choose-auth">
      <h1>Choose Authentication Provider</h1>
      <div id="list-auth-providers">
        {state.providers.map((provider) => (
          <AuthButton key={provider.id} {...provider} />
        ))}
        <BackButton />
      </div>
    </div>
  );
}
