// app/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
// import { HiMiniCpuChip } from "react-icons/hi2";
// import {LuHome} from "react-icons/lu";
// import { LuHome } from "react-icons/lu";
import { SiForestry } from "react-icons/si";

import { HiPhoneArrowDownLeft, HiMapPin } from "react-icons/hi2";
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
import { Spinner } from "./components";
import { Session } from "next-auth";

import useDeviceDetection from "@/app/utilities/useDeviceDetection";

const NavBar = () => {
  const currentPath = usePathname();
  // console.log(currentPath);

  const links = [
    { label: "Menus", href: "/menus" },
    { label: "Chambres", href: "/chambres" },
  ];

  // const device = useDeviceDetection();

  // const choseDeviceContent = () => {
  //   return <p>{device}</p>;
  // };

  return (
    <>
      {/* <nav className="fixed w-full px-5 py-3 z-[10] border-b border-white"> */}
      <AuthStatus />
      {/* </nav> */}
    </>
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
    // <NavLinksLayout links={links} currentPath={currentPath} />
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

const NavLinksLayout = (
  links: {
    label: string;
    href: string;
  }[],
  currentPath: string
) => {
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
// just separe layout to have a lighter AuthStatus
const UnauthenticatedLayout = () => {
  return (
    // <nav className="fixed w-full px-5 py-3 z-[10] border-white mix-blend-difference">
    //  <Container className="mix-blend-difference"> */}
    <nav className="fixed w-full z-[10]">
      <Container className="bg-white/90 backdrop-blur-[20px] px-5 py-3">
        {/* <Flex justify="between"> */}
        {/* <Flex align="center" gap="3"> */}
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <p className="font-semibold">
              <span className="inline-flex items-baseline pe-3">
                <SiForestry />
              </span>
              La Baraka
            </p>
          </Link>
          {/* <NavLinks /> */}
          <div className="flex flex-row justify-end items-center gap-2">
            <div className="p-1 rounded-full">
              <a href="tel:+33749605068" className="">
                <HiPhoneArrowDownLeft />
              </a>
            </div>
            <div className="p-1 rounded-full">
              <a
                href="http://maps.apple.com/?q=44.17998, 3.74203"
                target="_blank"
                className=""
              >
                <HiMapPin />
              </a>
            </div>
          </div>
        </div>
        {/* </Flex> */}
        {/* </Flex> */}
      </Container>
    </nav>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Spinner />;

  if (status === "unauthenticated") return <UnauthenticatedLayout />;
  return (
    <>
      <nav className="fixed w-full z-[10]">
        <Container className="bg-white/90 backdrop-blur-[20px] px-5 py-3 ">
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
            </Flex>
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
                    <Link href="/reservations">Reservations</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Link href="/guests">Guests</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Link href="/chambres">Rooms</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Box>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
