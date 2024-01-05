import { getProductsById } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";
import { responseGeneric } from "../route";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const productDetail = await getProductsById(id);

  return NextResponse.json<responseGeneric<unknown>>({
    statusCode: 200,
    data: productDetail,
  });
};
