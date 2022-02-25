interface Author {
  name: string;
}

interface Book {
  authors: { key: string }[];
  resolvedAuthors: Author[];
}

const OpenLibraryService = {
  getBook: async function (isbn: string): Promise<Book> {
    const response: Response = await fetch(
      `https://openlibrary.org/isbn/${isbn}.json`
    );
    const book: Book = (await response.json()) as Book;
    const authors: (Promise<Author> | Author)[] = [];

    for (const author of book.authors) {
      authors.push(this.getAuthor(author.key));
    }

    await Promise.all(authors);
    book.resolvedAuthors = authors as Author[];

    return book;
  },

  getAuthor: function (author: string): Promise<Author> {
    return fetch(`https://openlibrary.org/authors/${author}.json`).then(
      (response) => response.json()
    );
  },
};

export default OpenLibraryService;
