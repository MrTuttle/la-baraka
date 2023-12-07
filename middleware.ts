// middleware.ts

export { default } from "next-auth/middleware";

export const config = {
  // * : zero or more parameter after /folder/
  // + : one or more
  // ? : zero or one
  matcher: [
    "/dashboard/:path*",
    "/menus/:path*",
    "/chambres/new",
    // "/chambres/:path*",
    "/images/:path*",
  ],
};
