import React from "react";
import { responseGeneric } from "../../api/product/route";
import { data } from "../../home/page";
import Header from "@/components/header";
import { addWishList } from "@/db/models/whistlist";
import { redirect } from "next/navigation";
import { ButtonClient } from "@/components/buttonClient";
import Image from "next/image";

const fetchData = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/product/${id}`, {
    cache: "no-store",
  });
  const responseJson: responseGeneric<data> = await response.json();
  return responseJson;
};

const Detail = async ({ params }: { params: { id: string } }) => {
  const data = await fetchData(params.id);

  return (
    <>
      <header className="py-4 shadow-sm bg-red">
        <div className="container flex items-center justify-between">
          {/* <!-- logo --> */}
          <a>
            <Image src="/logo.png" alt="logo" className="w-32" />
          </a>
          {/* <!-- search --> */}

          {/* <!-- icons --> */}
          <div className="flex items-center space-x-4">
            <a className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="fas fa-heart "></i>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </div>
            </a>
            <a className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="fas fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                ?
              </div>
            </a>
          </div>
        </div>
      </header>
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img src={data.data.thumbnail} alt="product" className="w-full" />
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2 right-1">
            {data.data.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock {"stock"} </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">slug: </span>
              <span className="text-gray-600">{data.data.slug}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              Rp.{data.data.price}
            </p>
            <p className="text-base text-gray-400 line-through">
              Rp{data.data.price + data.data.price * 3}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{data.data.description}</p>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <div>
              <ButtonClient productId={data.data._id} />
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
