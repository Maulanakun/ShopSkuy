import Banner from "@/components/bannner";
import Card from "@/components/card";
import Features from "@/components/features";
import Header from "@/components/header";
import Pagination from "@/components/pagination";

export type data = {
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
type responseGeneric<T> = {
  statusCode: number;
  message?: string;
  data: T;
  error?: string;
};
const fetchData = async () => {
  const response = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });
  const responseJson = (await response.json()) as responseGeneric<data[]>;
  if (!response.ok) {
    throw new Error("error");
  }
  return responseJson;
};

const Homes = async () => {
  const result = await fetchData();
  const data = result.data;
  return (
    <>
      {/* <!-- header start --> */}
      <Header />
      {/* <!-- header end --> */}
      <Banner />
      {/* Banner Start */}

      {/* Banner End */}
      {/* features start */}
      <Features />
      {/* features end */}

      {/* product start */}
      <Card result={data} />
      {/* product end */}

      {/* pagination start */}
      <Pagination />
      {/* pagination end */}
    </>
  );
};

export default Homes;
