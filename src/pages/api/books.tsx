import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

function getData() {
  const filePath = path.join(process.cwd(), "data", "books.json");
  const fileData: any = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const data = getData();
    return res.status(200).json({ message: data });
  } else if (req.method === "POST") {
    const { name, description, imgUrl } = req.body;
    const newBook = {
      name,
      description,
      imgUrl,
      id: Date.now(),
    };
    const filePath = path.join(process.cwd(), "data", "books.json");

    const data = getData();
    data.push(newBook);
    fs.writeFileSync(filePath, JSON.stringify(data))
    return res.status(201).json({ message: "Added", book: newBook });
  }
}

export default handler;
