import { register } from "@/db/models/users";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
export type responseGeneric<T> = {
  statusCode: number;
  message?: string;
  data: T;
  error?: string;
};

const inputSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});
export const POST = async (request: Request) => {
  const raw = await request.json();

  const parsedData = inputSchema.safeParse(raw);

  if (!parsedData.success) {
    throw parsedData.error;
  }
  const newUser = await register(parsedData.data);

  return NextResponse.json<responseGeneric<unknown>>({
    statusCode: 201,
    message: "success regist",
    data: newUser,
  });
};
