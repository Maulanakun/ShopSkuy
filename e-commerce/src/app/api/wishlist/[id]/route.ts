import {
  addWishList,
  deleteWishList,
  getWishlist,
} from "@/db/models/whistlist";
import { NextRequest, NextResponse } from "next/server";
import { responseGeneric } from "../../product/route";
import { cookies } from "next/headers";
import { readPayloadJose } from "@/db/helpers/jwt";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const wishlist = await getWishlist(id);
  return NextResponse.json<responseGeneric<unknown>>({
    statusCode: 200,
    data: wishlist,
  });
};

export const DELETE = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  await deleteWishList(params.id);
  return NextResponse.json<responseGeneric<unknown>>({
    statusCode: 200,
    message: "success delete",
    data: "success delete",
  });
};

export const POST = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const userLoginInfo = cookies().get("access_token");
  console.log(params, 22222222);

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
  const input = {
    userId: tokenData.id,
    productId: params.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await addWishList(input);
  console.log(result);

  return NextResponse.json<responseGeneric<unknown>>({
    statusCode: 200,
    data: result,
  });
};
