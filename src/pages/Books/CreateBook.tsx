import { Save24Regular } from "@fluentui/react-icons";
import { useLocation } from "react-router-dom";
import Input from "../../components/common/Input/Input";

export default function CreateBook() {
  const location = useLocation();
  const isbn = location.search.split("=")[1];
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
