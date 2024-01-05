"use client";
// ./src/components/buttonDelete.tsx
import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";

const deleteProduct = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/wishlist/${id}`, {
    method: "DELETE",
  });
  const responseJson = response.json();
  return responseJson;
};

export const ButtonDelete = ({ productId }: { productId: string }) => {
  const handleDelete = async () => {
    const deleted = await deleteProduct(productId);
  };

  return (
    <Link href={"/wishlist"}>
      <button
        className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
        onClick={handleDelete}
      >
        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <i className="fa-solid fa-trash"></i>
        </div>
      </button>
    </Link>
  );
};
