import { prisma } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    if (!email) return null;

    return await prisma.user.findUnique({ where: { email } });
  } catch {
    return null;
  }
};
