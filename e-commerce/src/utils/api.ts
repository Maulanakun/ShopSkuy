// @/utils/api.ts

import { output } from "@/db/models/whistlist";

interface ApiResponse<T> {
  data: T;
}

export const fetchData = async (
  userId: string
): Promise<ApiResponse<output>> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/wishlist/${userId}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseData = await response.json();
    return { data: responseData };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
