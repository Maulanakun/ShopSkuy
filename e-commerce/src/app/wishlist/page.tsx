import { readPayloadJose } from "@/db/helpers/jwt";
import { output } from "@/db/models/whistlist";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import React from "react";
import { responseGeneric } from "../api/product/route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ButtonDelete } from "@/components/buttonDelete";

const fetchData = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/wishlist/${id}`, {
    cache: "no-store",
  });
  const responseJson: responseGeneric<output> = await response.json();
  return responseJson;
};

const Whistlist = async () => {
  const userLoginInfo = cookies().get("access_token");
  if (!userLoginInfo) {
    // Karena asumsi ini adalah DARI /api (route handler), maka kita akan menggunakan NextResponse.json()
    return NextResponse.json({
      statusCode: 401,
      error: "Unauthorized",
    });
  }
  const tokenData = await readPayloadJose<{ id: string; email: string }>(
    userLoginInfo.value
  );

  const data = await fetchData(tokenData.id);

  return (
    <>
      {/* <!-- sidebar --> */}
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src={data.data.userDetail.pfp}
                alt="profile"
                className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello,</p>
              <h4 className="text-gray-800 font-medium">
                {data.data.userDetail.name}
              </h4>
            </div>
          </div>

          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            <div className="space-y-1 pl-8">
              <a href="#" className="block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-address-card"></i>
                </span>
                Manage account
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Profile information
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Manage addresses
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Change password
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-box-archive"></i>
                </span>
                My order history
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My returns
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My Cancellations
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My reviews
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-credit-card"></i>
                </span>
                Payment methods
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                voucher
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-heart"></i>
                </span>
                My wishlist
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                Logout
              </a>
            </div>
          </div>
        </div>
        {/* <!-- ./sidebar --> */}
        <div className="col-span-9 space-y-4">
          {data.data.wishlist?.map((el) => (
            <div
              className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
              key={el._id}
            >
              <div className="w-28">
                <img src={el?.thumbnail} alt="product 6" className="w-full" />
              </div>
              <div className="w-1/3">
                <h2 className="text-gray-800 text-xl font-medium uppercase">
                  {el?.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  Availability: <span className="text-green-600">In Stock</span>
                </p>
              </div>
              <div className="text-primary text-lg font-semibold">
                {el?.price}
              </div>
              <a
                href="#"
                className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                add to cart
              </a>
              {/* disisin */}
              <ButtonDelete productId={el._id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Whistlist;
