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
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <div className="flex flex-column">
        <Link href="/">
          <p className="mx-4 font-semibold">
            {" "}
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
