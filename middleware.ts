// middleware.ts

export { default } from "next-auth/middleware";

export const config = {
  // * : zero or more parameter after /users/
  // + : one or more
  // ? : zero or one
  matcher: ["/dashboard/:path*", "/menus/:path*", "/chambres/new"],
};
