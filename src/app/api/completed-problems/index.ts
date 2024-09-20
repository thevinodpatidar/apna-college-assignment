// pages/api/completed-problems/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Assuming you have user authentication and can get the user ID
    const userId = "user-id"; // Replace with actual user ID from authentication

    try {
      const completedProblems = await prisma.completedProblem.findMany({
        where: { userId: userId },
        select: { problemId: true },
      });
      res.status(200).json(completedProblems.map((cp: any) => cp.problemId));
    } catch (error) {
      res.status(500).json({ message: "Error fetching completed problems" });
    }
  } else if (req.method === "POST") {
    const { problemId } = req.body;
    const userId = "user-id"; // Replace with actual user ID from authentication

    try {
      const completedProblem = await prisma.completedProblem.create({
        data: {
          userId: userId,
          problemId: problemId,
        },
      });
      res.status(201).json(completedProblem);
    } catch (error) {
      res.status(500).json({ message: "Error marking problem as completed" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
