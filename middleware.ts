import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authed = request.cookies.get("project_auth")?.value === "granted";
  if (!authed) {
    const loginUrl = new URL("/projects/ai-cloud-infrastructure/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/projects/ai-cloud-infrastructure",
};
