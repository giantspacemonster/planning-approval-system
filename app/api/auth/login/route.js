import axios from "axios";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
export async function POST(request) {
  const body = await request.json();
  const { userid, password } = body;
  //   console.log(body, "FROM SERVER");
  try {
    const res = await axios.post("http://localhost:8082/auth/login", body);
    // console.log(res.data, "FROM SERVER");
    const serialized = serialize("jwtToken", res.data.jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: process.env.MAX_AGE,
      path: "/",
    });
    const user = serialize("username", res.data.username, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: process.env.MAX_AGE,
      path: "/",
    });
    return new Response(`Authenticated`, {
      status: 200,
      headers: {
        "Set-Cookie": [serialized, user],
        Authorization: `Bearer ${res.data.jwtToken}`,
      },
    });
  } catch (e) {
    return new Response("NOT Authenticated!", {
      status: 500,
    });
  }
}
