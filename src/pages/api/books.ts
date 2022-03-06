import type { NextApiRequest, NextApiResponse } from "next";
import Book from "../../common/types/Book";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
): void {
  res.status(200).json([
    {
      title:
        "Kommunistisches Manifest der siebenundvierzigsten Generation des Abendlandes",
      author: "Karl Marxsdf sdflkjdsf klösdjflköjsfd ",
      amount: 1,
      lent: 0,
      new: true,
      id: 1,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lent: 1,
      favorite: true,
      id: 2,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lent: 0,
      new: true,
      id: 3,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lentPerson: "Adrian Reuter",
      lentDate: "25.01.2022",
      new: true,
      id: 4,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lent: 0,
      new: true,
      id: 5,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lent: 0,
      new: true,
      id: 6,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lent: 0,
      new: true,
      id: 7,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lent: 0,
      new: true,
      id: 8,
    },
    {
      title: "Kommunistisches Manifest",
      author: "Karl Marx",
      amount: 2,
      lent: 0,
      new: true,
      id: 9,
    },
  ]);
}
