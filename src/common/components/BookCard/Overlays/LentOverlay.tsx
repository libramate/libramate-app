import { FC } from "react";

type LentOverlayProps = {
  lent?: number;
  lentPerson?: string;
  lentDate?: string;
};

export const LentOverlay: FC<LentOverlayProps> = ({
  lent,
  lentDate,
  lentPerson,
}) => {
  if (!lent) {
    return <></>;
  }
  return (
    <div className="first-line:text-base bg-accent text-center py-1 flex-none border-t border-border text-sm">
      {lentPerson ? (
        <>
          {lentPerson}
          <br />
          {lentDate}
        </>
      ) : (
        `${lent} lent`
      )}
    </div>
  );
};

export default LentOverlay;
