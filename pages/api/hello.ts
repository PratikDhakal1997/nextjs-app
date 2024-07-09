// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// You can access this as - http://localhost:3000/api/hello
// For now, we can use external API unless you are keen to do your own
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
