import { NextResponse } from "next/server";
var fs = require("fs");
export async function POST(req) {
  const body = await req.json();
  console.log(body);
  try {
    const dat = await fs.writeFileSync("./data.json", JSON.stringify(body));
    return NextResponse.json(body, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
