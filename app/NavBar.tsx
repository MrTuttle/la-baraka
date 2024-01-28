// app/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
// import { HiMiniCpuChip } from "react-icons/hi2";
// import {LuHome} from "react-icons/lu";
// import { LuHome } from "react-icons/lu";
import { SiForestry } from "react-icons/si";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  DropdownMenuTrigger,
  Flex,
  Text,
} from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  // console.log(currentPath);

  const links = [
    { label: "Menus", href: "/menus" },
    { label: "Chambres", href: "/chambres" },
  ];

  return (
    <nav className="border-b px-5 py-3 z-[1]">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <p className="font-semibold">
                <span className="inline-flex items-baseline pe-3">
                  <SiForestry />
                </span>
                La Baraka
              </p>
            </Link>
            {/* <NavLinks /> */}
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
    // <nav className="flex space-x-6 border-b px-4 h-14 items-center justify-between bg-white">
    //   <div className="flex flex-row">
    //     <Link href="/">
    //       <p className="font-semibold">
    //         <span className="inline-flex items-baseline pe-3">
    //           <SiForestry />
    //         </span>
    //         La Baraka
    //       </p>
    //     </Link>
    //   </div>
    //   <ul className="flex space-x-6">
    //     {links.map((link) => (
    //       <li key={link.label} className="ml-10">
    //         <Link
    //           href={link.href}
    //           className={`text-zinc-500 hover:text-zinc-800 transition-colors`}
    //         >
    //           {link.label}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  // console.log(currentPath);

  const links = [
    { label: "Log out", href: "auth/signout" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Menus", href: "/menus" },
    { label: "Chambres", href: "/chambres" },
  ];
  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.label} className="ml-10">
          <Link
            href={link.href}
            className={classnames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated")
    return (
      <DropdownMenu.Item>
        <Link className="nav-link" href="/api/auth/signin">
          Login
        </Link>
      </DropdownMenu.Item>
    );

  // <Link href="/api/auth/signout">Log out</Link>;
  return (
    <>
      <Box>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session!.user!.image!}
              fallback="?"
              size="2"
              radius="full"
              className="cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">{session!.user!.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/">Home</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/dashboard">dashboard</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/menus">Menus</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/chambres">Rooms</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
    </>
  );
};

export default NavBar;
