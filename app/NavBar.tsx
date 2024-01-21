// app/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { HiMiniCpuChip } from "react-icons/hi2";
// import {LuHome} from "react-icons/lu";
// import { LuHome } from "react-icons/lu";
import { SiForestry } from "react-icons/si";

const NavBar = () => {
  const currentPath = usePathname();
  // console.log(currentPath);

  const links = [
    { label: "Menus", href: "/menus" },
    { label: "Chambres", href: "/chambres" },
  ];
  return (
    <nav className="flex space-x-6 border-b px-4 h-14 items-center justify-between bg-white">
      <div className="flex flex-row">
        <Link href="/">
          <p className="font-semibold">
            <span className="inline-flex items-baseline pe-3">
              <SiForestry />
            </span>
            La Baraka
          </p>
        </Link>
      </div>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label} className="ml-10">
            <Link
              href={link.href}
              className={`text-zinc-500 hover:text-zinc-800 transition-colors`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
