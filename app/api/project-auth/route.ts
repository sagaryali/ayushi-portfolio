import { NextRequest, NextResponse } from "next/server";
import { PASSWORD } from "../../../lib/password";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== PASSWORD) {
    return NextResponse.json({ error: "wrong password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("project_auth", PASSWORD, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  return res;
}
