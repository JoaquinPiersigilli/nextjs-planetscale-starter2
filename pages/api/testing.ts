import prisma from "../../lib/prisma";

export default async function assetHandler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const proposals = await prisma.proposal.findMany();
        res.status(200).json(proposals);
      } catch (e) {
        console.error("Request error: ", e);
        res.status(500).json({ error: "Error fetching proposals" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end("Method not allowed");
      break;
  }
}
