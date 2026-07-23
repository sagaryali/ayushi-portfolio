import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "mydesignprojects";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== PASSWORD) {
    return NextResponse.json({ error: "wrong password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("project_auth", "granted", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  return res;
}
