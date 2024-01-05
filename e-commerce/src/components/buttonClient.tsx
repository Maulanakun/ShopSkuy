"use client";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

const addWishListEnd = async (productId: string) => {
  const response = await fetch(
    `http://localhost:3000/api/wishlist/${productId}`,
    {
      method: "POST",
    }
  );
  // revalidatePath("/wishlist");
  // redirect("/wishlist");
};

export const ButtonClient = ({ productId }: { productId: string }) => {
  return (
    <Link href={"/wishlist"}>
      <button
        className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
        onClick={async () => await addWishListEnd(productId)}
      >
        <i className="fa-solid fa-heart"></i> Wishlist
      </button>
    </Link>
  );
};
