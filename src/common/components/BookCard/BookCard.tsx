import { FC } from "react";
import { LeftTopOverlay, RightTopOverlay } from "./Overlays/TopOverlay";
import LentOverlay from "./Overlays/LentOverlay";

type BookCardProps = {
  title: string;
  author: string;
  amount: number;
  recent?: boolean;
  favorite?: boolean;
  lent?: number;
  lentPerson?: string;
  lentDate?: string;
  imageUrl?: string;
};

const BookCard: FC<BookCardProps> = ({
  title,
  author,
  amount,
  recent,
  favorite,
  lent,
  lentDate,
  lentPerson,
}) => (
  <div className="bg-e-1 rounded-lg overflow-clip border border-border shadow-elevation-1 flex flex-col relative z-0">
    {/* <img
        className="lib-cover-img"
        src="https://images.pexels.com/photos/11143102/pexels-photo-11143102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      /> */}
    {
      // TODO image and lazy loading
    }
    <div className="h-full object-cover"></div>
    <LentOverlay {...{ lent, lentDate, lentPerson }} />
    <div className="border-t border-border bg-e1 py-3 px-4">
      <p className="overflow-hidden whitespace-nowrap text-ellipsis text-sm">
        {author}
      </p>
      <h3 className="overflow-hidden mt-[0.3rem] line-clamp-3">{title}</h3>
    </div>
    <LeftTopOverlay {...{ favorite, recent }} />
    <RightTopOverlay amount={amount} />
  </div>
);

export default BookCard;
