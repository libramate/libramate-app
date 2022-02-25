interface Author {
  name: string;
}

interface Book {
  authors: { key: string }[];
  resolvedAuthors: Author[];
}

class OpenLibraryService {
  public async getBook(isbn: string): Promise<Book> {
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
  }

  private getAuthor(author: string): Promise<Author> {
    return fetch(`https://openlibrary.org/authors/${author}.json`).then(
      (response: Response) => response.json()
    ) as Promise<Author>;
  }
}

export default OpenLibraryService;
