import "./Input.scss";

export default function Input(props: { title: string }) {
  return (
    <>
      <div>{props.title}</div>
      <input className="input-field"></input>
    </>
  );
}
