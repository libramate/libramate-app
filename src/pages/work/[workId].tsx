import { NextPage as WorkPage } from "next";
import { useRouter } from "next/router";
import { NavLayout } from "../../common/components/layout/Layout";
import SessionValidator from "../../common/components/SessionValidator/SessionValidator";

const BookPage: WorkPage = () => {
  const router = useRouter();
  const { bookId } = router.query;

  return (
    <>
      <SessionValidator />

      <NavLayout></NavLayout>
    </>
  );
};

export default BookPage;
