import { Filter24Regular, Person24Regular } from "@fluentui/react-icons";
import BookCard from "./BookCard";
import "./library.scss";

export default function Library() {
  let booklist = [
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
    <BookCard />,
  ];
  return (
    <div id="library">
      <h1>My Library</h1>
      {/* TODO: List and dynamic updates */}
      <div id="library-filter-bar">
        <button>
          <Person24Regular />
        </button>
        <input type="text" placeholder="Search" />
        <button>
          <Filter24Regular />
        </button>
      </div>
      <div id="library-booklist">{booklist}</div>
    </div>
  );
}
