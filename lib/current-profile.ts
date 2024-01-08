import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const currentProfile = async () => {
  try {
    const { userId } = auth();

    if (!userId) {
      return null;
    }

    const profile = await db.profile.findUnique({
      where: {
        userId,
      },
    });

    return profile || null; // Ensure consistent return type
  } catch (error) {
    console.error("Error fetching current profile:", error);
    return null;
  }
};
