import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import FilterBar from "../../common/components/FilterBar/FilterBar";
import CustomHead from "../../common/components/Head/Head";
import { NavLayout } from "../../common/components/layout/Layout";
import SessionValidator from "../../common/components/SessionValidator/SessionValidator";
import useAsync from "../../common/hooks/useAsync";
import Book from "../../common/types/Book";
import BookCard from "../../common/components/BookCard/BookCard";

const Library: FC = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>();

  const fetchData = (): Promise<Book[]> =>
    fetch("/api/books").then((res) => res.json()) as Promise<Book[]>;

  useAsync<Book[]>(fetchData, setBooks);

  return (
    <>
      <SessionValidator />
      <CustomHead title="Library" />

      <NavLayout className="py-12 px-8">
        <h1 className="mb-6 text-4xl font-bold">Library</h1>
        <FilterBar idPrefix="library" />
        <div className="grid auto-rows-library grid-cols-library gap-4">
          {books?.map((book) => (
            <BookCard {...book} key={book.id} />
          ))}
        </div>
      </NavLayout>
    </>
  );
};

export default Library;
