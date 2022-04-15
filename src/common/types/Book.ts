type Book = {
  title: string;
  author: string;
  amount: number;
  new?: boolean;
  favorite?: boolean;
  lent?: number;
  lentPerson?: string;
  lentDate?: string;
  imageUrl?: string;
  id: number;
};

export default Book;
