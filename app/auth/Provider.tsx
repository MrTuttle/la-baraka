// app/auth/Provider.tsx

"use client";

import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;

// "use client";

// import React, { ReactNode } from "react";
// import { SessionProvider } from "next-auth/react";

// const AuthProvider = ({ children }: { children: ReactNode }) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

// export default AuthProvider;
