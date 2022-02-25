import FilterBar from "../../components/common/FilterBar/FilterBar";
import BookCard from "./BookCard";
import "./Library.scss";

export default function Library() {
  let booklist = [
    <BookCard
      title="Kommunistisches Manifest der siebenundvierzigsten Generation des Abendlandes"
      author="Karl Marxsdf sdflkjdsf klösdjflköjsfd "
      amount={1}
      lent={0}
      new={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lent={1}
      favorite={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lent={0}
      new={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lentPerson={"Adrian Reuter"}
      lentDate={"25.01.2022"}
      new={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lent={0}
      new={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lent={0}
      new={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lent={0}
      new={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lent={0}
      new={true}
    />,
    <BookCard
      title="Kommunistisches Manifest"
      author="Karl Marx"
      amount={2}
      lent={0}
      new={true}
    />,
  ];

  return (
    <div id="library">
      <h1>My Library</h1>
      {/* TODO: List and dynamic updates */}
      <FilterBar idPrefix="library" />
      <div id="library-booklist">{booklist}</div>
    </div>
  );
}
