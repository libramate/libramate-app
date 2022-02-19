import GitHub from "../../../public/github.svg";
import "./ChooseAuthProvider.scss";

function AuthButton(props: { img: JSX.Element; name: string; url: string }) {
  return (
    <button
      onClick={() => {
        window.location.href = props.url;
      }}
    >
      {props.img()}
      <div>{props.name}</div>
    </button>
  );
}

export default function ChooseAuthProvider() {
  return (
    <div id="choose-auth">
      <AuthButton
        img={GitHub}
        name="GitHub"
        url="https://github.com/login/oauth/authorize?client_id=16fd856fbe6f3d9bfcc5&scope=read:user"
      />
    </div>
  );
}
