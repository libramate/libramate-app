import GitHub from "../../../public/github.svg";
import "./ChooseAuthProvider.scss";

function AuthButton(props: { img: JSX.Element; name: string; url: string }) {
  return (
    <button
      onClick={() => {
        window.location.href = props.url;
      }}
      className="btn-auth-provider"
    >
      {props.img()}
      <span>{props.name}</span>
    </button>
  );
}

export default function ChooseAuthProvider() {
  return (
    <div id="choose-auth">
      <h1>Choose Authentication Provider</h1>
      <div id="list-auth-providers">
        <AuthButton
          img={GitHub}
          name="GitHub"
          url="https://github.com/login/oauth/authorize?client_id=16fd856fbe6f3d9bfcc5&scope=read:user"
        />
      </div>
    </div>
  );
}
