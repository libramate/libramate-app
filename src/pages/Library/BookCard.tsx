import { New24Regular, Star24Filled } from "@fluentui/react-icons";
import { ReactElement } from "react";
import "./BookCard.scss";

interface propsBookCard {
  title: string;
  author: string;
  amount: number;
  new?: boolean;
  favorite?: boolean;
  lent?: number;
  lentPerson?: string;
  lentDate?: string;
  imageUrl?: string;
}

export default function BookCard(props: propsBookCard) {
  let lentOverlay: ReactElement | null = null;
  let ltOverlay: ReactElement | null = null;
  let rtOverlay: ReactElement | null = null;

  if (props.lentPerson) {
    lentOverlay = (
      <div className="lib-lent-overlay">
        {props.lentPerson}
        <br />
        {props.lentDate}
      </div>
    );
  } else {
    if (props.lent && props.lent > 0) {
      lentOverlay = (
        <div className="lib-lent-overlay">{`${props.lent} lent`}</div>
      );
    }
  }
  if (props.new) {
    ltOverlay = (
      <div className="lib-overlay-lt lib-new-overlay">
        <New24Regular color="var(--color-accent-font)" />
      </div>
    );
  } else if (props.favorite) {
    ltOverlay = (
      <div className=" lib-overlay-lt lib-fav-overlay">
        <Star24Filled color="var(--color-accent-font)" />
      </div>
    );
  }

  if (props.amount > 1) {
    rtOverlay = (
      <div className="lib-overlay-rt lib-amount-overlay">{props.amount}</div>
    );
  }

  return (
    <div className="book-card book-card-loading">
      {/* <img
        className="lib-cover-img"
        src="https://images.pexels.com/photos/11143102/pexels-photo-11143102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      /> */}
      <div className="lib-cover-img"></div>
      {lentOverlay}
      <div className="book-card-data-overlay">
        <p className="lib-author-name">{props.author}</p>
        <h3 className="lib-title">{props.title}</h3>
      </div>
      {ltOverlay}
      {rtOverlay}
    </div>
  );
}
