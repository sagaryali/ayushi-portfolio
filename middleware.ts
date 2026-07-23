import { NextRequest, NextResponse } from "next/server";
import { PASSWORD } from "./lib/password";

export function middleware(request: NextRequest) {
  const authed = request.cookies.get("project_auth")?.value === PASSWORD;
  if (!authed) {
    const loginUrl = new URL(`${request.nextUrl.pathname}/login`, request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/ai-cloud-infrastructure", "/projects/philips"],
};
