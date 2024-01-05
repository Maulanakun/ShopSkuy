"use server";
import { compareHash } from "@/db/helpers/bcryptts";
import { signToken } from "@/db/helpers/jwt";
import { getUserByEmail } from "@/db/models/users";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";

export const doLogin = async (formData: FormData) => {
  const formLogin = z.object({
    email: z.string().email(),
    password: z.string(),
  });
  const input = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const parsedData = formLogin.safeParse(input);
  console.log(parsedData);

  if (!parsedData.success) {
    const errPath = parsedData.error.issues[0].path[0];
    const errMessage = parsedData.error.issues[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(`http://localhost:3000/login?error=${errFinalMessage}`);
  }
  const user = await getUserByEmail(parsedData.data.email);

  if (!user || !compareHash(parsedData.data.password, user.password)) {
    return redirect(`http://localhost:3000/login?error=Invalid%20credentials`);
  }
  const payload = {
    id: user._id,
    email: user.email,
  };
  const token = signToken(payload);

  cookies().set("access_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });
  return redirect("http://localhost:3000/");
};
