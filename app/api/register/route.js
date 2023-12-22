import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body;
  try {
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
