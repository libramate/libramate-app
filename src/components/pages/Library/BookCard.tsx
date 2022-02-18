import "./BookCard.scss";

interface propsBookCard {}

export default function BookCard(props: propsBookCard) {
  return (
    <div className="book-card book-card-loading">
      <div className="book-card-overlay"></div>
    </div>
  );
}
