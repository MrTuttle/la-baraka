import prisma from "@/prisma/client";
import { Card, Grid, Inset, Text } from "@radix-ui/themes";
import React from "react";
import CldImageClient from "../components/CldImageClient";

const ImagesListPage = async () => {
  const images = await prisma.image.findMany();
  return (
    <div className="mx-4">
      <h1>Images List Page</h1>
      <Grid columns="3" gap="3" width="auto">
        {images.map((image, index) => (
          <Card key={index} asChild style={{ maxWidth: 350 }}>
            <a href={"/images/" + image.id}>
              <Inset clip="padding-box" side="top" pb="current">
                <CldImageClient
                  src={image.publicId}
                  width={600}
                  height={300}
                  sizes="100vh"
                  alt={image.alt}
                />
              </Inset>
              <Text as="div" size="2" weight="bold">
                public id : {image.publicId}
              </Text>
              <Text as="div" color="gray" size="2">
                associated room id :{image.assignedToRoomId}
              </Text>
              <Text as="p" color="gray" size="2">
                Cover : {image.cover.toString()}
              </Text>
            </a>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default ImagesListPage;

// <Grid columns="3" gap="3" width="auto">
//   {images.map((image, index) => (
//     <div
//       key={index}
//       className="w-52 pb-2 bg-white rounded-md shadow-md z-10"
//     >
//       <div className="relative max=h-60  object-cover rounded-t-md overflow-hidden">
//         {/* <!-- :src="image.largeImageURL"     --> */}
//         {/* <Image
//           src={imagepublic}
//           className="max-h-60 object-cover rounded-t-md"
//           alt=""
//           width={600}
//           height={200}
//         /> */}
//         <CldImageClient
//           src={image.publicId}
//           width={600}
//           height={300}
//           sizes="100vh"
//           alt={image.alt}
//         />
//         {/* <!-- Tag rekomendasi --> */}
//         {/* <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
//           Recommended
//         </div> */}
//       </div>
//       <div className="px-2 py-1">
//         {/* <!-- Product Title --> */}
//         <div className="text-sm md:text-base font-bold pr-2">
//           {image.assignedToRoomId}
//         </div>

//         {/* <!-- Alamat --> */}
//         <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua
//         </p>
//         {/* <!-- Tombol pesan --> */}
//         {/* <a
//           className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
//           href="#"
//         >
//           Order
//         </a> */}
//       </div>
//     </div>
//   ))}
//   <div className="w-52 pb-2 bg-white rounded-md shadow-md z-10">
//     <div className="relative">
//       {/* <!-- :src="image.largeImageURL"     --> */}
//       <Image
//         src={imagepublic}
//         className="max-h-60 object-cover rounded-t-md"
//         alt=""
//         width={600}
//         height={200}
//       />
//       {/* <!-- Tag rekomendasi --> */}
//       {/* <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
//           Recommended
//         </div> */}
//     </div>
//     <div className="px-2 py-1">
//       {/* <!-- Product Title --> */}
//       <div className="text-sm md:text-base font-bold pr-2">Shop Name</div>

//       {/* <!-- Alamat --> */}
//       <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua
//       </p>
//       {/* <!-- Tombol pesan --> */}
//       {/* <a
//           className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
//           href="#"
//         >
//           Order
//         </a> */}
//     </div>
//   </div>
// </Grid>;
