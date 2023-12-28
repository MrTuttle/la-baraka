import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { GrRestaurant } from "react-icons/gr";

import { LuSalad } from "react-icons/lu";
import { TbSalad } from "react-icons/tb";
import { RiRestaurant2Line } from "react-icons/ri";

import { RiCake3Line } from "react-icons/ri";

import Link from "next/link";

const SelectIcon = () => {
  return (
    <>
      <div className="py-4 flex gap-2">
        <div className="  bg-lime-600 p-8 rounded">
          <GrRestaurant className="text-3xl text-black opacity-40" />
        </div>
        <div className=" bg-amber-400 p-8 rounded">
          <LuSalad className="text-3xl text-black opacity-40" />
        </div>
        <div className=" bg-red-500 p-8 rounded">
          <RiRestaurant2Line className="text-3xl text-black opacity-40" />
        </div>
        <div className=" bg-cyan-500 p-8 rounded">
          <RiCake3Line className="text-3xl text-black opacity-40" />
        </div>
      </div>
    </>
  );
};

export default SelectIcon;
