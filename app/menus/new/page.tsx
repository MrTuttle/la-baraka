import NewMenuForm from "@/app/components/MenuForm";
import React from "react";
import dynamic from "next/dynamic";
import MenuFormSkeleton from "@/app/menus/_components/MenuFormSkeleton";

const MenuForm = dynamic(() => import("@/app/menus/_components/MenuForm"), {
  ssr: false,
  loading: () => <MenuFormSkeleton />,
});

const NewMenuPage = () => {
  return (
    <div className="mx-4">
      <h1>Nouveau Menu</h1>
      {/* <NewMenuForm /> */}
      <MenuForm />
    </div>
  );
};

export default NewMenuPage;
