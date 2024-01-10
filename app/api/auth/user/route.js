import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const username = cookieStore.get("username");
  const isJWT = cookieStore.get("jwtToken") !== undefined;
  console.log(isJWT);
  return NextResponse.json({ user: username, isJWT: isJWT });
}
