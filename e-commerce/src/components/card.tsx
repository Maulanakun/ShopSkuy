import Link from "next/link";
import React from "react";

type data = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags?: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

const Card = ({ result }: { result: data[] }) => {
  const productList: data[] = result;
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {productList.map((el) => (
          <div
            className="bg-white shadow rounded overflow-hidden group"
            key={el._id}
          >
            <div className="relative">
              <img src={el.thumbnail} alt="product 1" className="w-full" />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <Link
                  href={`/products/${el._id}`}
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <button>
                    <i className="fa fa-eye"></i>
                  </button>
                </Link>
                <a></a>
                <a
                  href=""
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href={"/product/"}>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  {el.name}
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">{el.price}</p>
                <p className="text-sm text-gray-400 line-through">
                  {el.price + el.price * 3}
                </p>
              </div>
              <div className="flex items-center">
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
                <div className="text-xs text-gray-500 ml-3">Stock</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
        ))}
      </div>
      )
    </>
  );
};

export default Card;
