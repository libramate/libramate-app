import { Save24Regular } from "@fluentui/react-icons";
import { useSearchParams } from "react-router-dom";
import Input from "../../components/common/Input/Input";

export default function CreateBook(): JSX.Element {
  const [searchParams] = useSearchParams();
  const isbn = searchParams.get("isbn") || "";
  return (
    <div>
      <Input title="isbn" value={isbn} readOnly={true} />
      <Input title="Title" />
      <Input title="Author" />
      <Input title="Publisher" />
      <Input title="Comment" />
      <button>
        <Save24Regular />
        Save
      </button>
    </div>
  );
}
