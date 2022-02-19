import "./Input.scss";

export default function Input(props: {
  title: string;
  value?: string;
  type?: string;
  readOnly?: boolean;
}) {
  return (
    <>
      <div>{props.title}</div>
      <input
        className="input-field"
        readOnly={props.readOnly}
        value={props.value}
      ></input>
    </>
  );
}
