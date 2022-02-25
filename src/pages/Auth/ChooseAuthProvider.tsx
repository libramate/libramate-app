import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthProvider,
  AuthProviderService,
} from "../../services/AuthProviderService";
import "./ChooseAuthProvider.scss";

function AuthButton(props: AuthProvider): JSX.Element {
  return (
    <button
      onClick={(): void => {
        window.location.href = props.url;
      }}
      className="btn-auth-provider"
    >
      <img src={props.img}></img>
      <span>{props.name}</span>
    </button>
  );
}

function BackButton(): JSX.Element {
  const navigate = useNavigate();
  return (
    <button
      onClick={(): void => {
        navigate("/");
      }}
      className="btn-auth-provider"
    >
      <span>Back</span>
    </button>
  );
}

export default function ChooseAuthProvider(): JSX.Element {
  const [state, setState] = useState<{ providers: AuthProvider[] }>({
    providers: [],
  });

  useEffect((): void => {
    void AuthProviderService.getAuthProviders("").then(
      (providers: AuthProvider[]) => setState({ providers })
    );
  });

  return (
    <div id="choose-auth">
      <h1>Choose Authentication Provider</h1>
      <div id="list-auth-providers">
        {state.providers.map((provider: AuthProvider) => (
          <AuthButton key={provider.id} {...provider} />
        ))}
        <BackButton />
      </div>
    </div>
  );
}
