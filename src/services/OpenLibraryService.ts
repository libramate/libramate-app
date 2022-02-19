interface Author {
  name: string;
}

interface Book {
  authors: { key: string }[];
  resolvedAuthors: Author[];
}

const OpenLibraryService = {
  getBook: function (isbn: string): Promise<Book> {
    return fetch(`https://openlibrary.org/isbn/${isbn}.json`)
      .then((response) => response.json())
      .then(async (response: Book) => {
        const authors: (Promise<Author> | Author)[] = [];
        response.authors.forEach((author) =>
          authors.push(this.getAuthor(author.key))
        );
        await Promise.all(authors);
        //response.resolvedAuthors = authors;
        return response;
      });
  },

  getAuthor: function (author: string): Promise<Author> {
    return fetch(`https://openlibrary.org/authors/${author}.json`).then(
      (response) => response.json()
    );
  },
};

export default OpenLibraryService;
