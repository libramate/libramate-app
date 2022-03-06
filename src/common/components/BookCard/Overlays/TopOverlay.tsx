import { New24Regular, Star24Filled } from "@fluentui/react-icons";
import { FC, ReactNode } from "react";

type TopOverlayProps = {
  className?: string;
  children?: ReactNode;
};

const TopOverlay: FC<TopOverlayProps> = ({ children, className }) => (
  <div
    className={`absolute top-2 bg-accent text-accent-font rounded-full flex justify-center items-center w-8 h-8 border border-border ${
      className || ""
    }`}
  >
    {children}
  </div>
);

type LeftTopOverlayProps = {
  recent?: boolean;
  favorite?: boolean;
};

export const LeftTopOverlay: FC<LeftTopOverlayProps> = ({
  recent,
  favorite,
}) => {
  if (!recent && !favorite) {
    return <></>;
  }

  return (
    <TopOverlay className="left-2">
      {favorite ? <Star24Filled /> : <New24Regular />}
    </TopOverlay>
  );
};

type RightTopOverlayProps = {
  amount: number;
};

export const RightTopOverlay: FC<RightTopOverlayProps> = ({ amount }) => {
  if (amount <= 1) {
    return <></>;
  }

  return <TopOverlay className="right-2">{amount}</TopOverlay>;
};
