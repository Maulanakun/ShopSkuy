import { getProducts } from "@/db/models/product"
import { NextRequest } from "next/server"


export type responseGeneric<T> = {
    statusCode:number,
    message?:string
    data:T
    error?:string
}


export const GET = async(request:NextRequest) => {
  const users = await getProducts()

  return Response.json({
    statusCode:201,
    message:'success to get',
    data:users
    })
}