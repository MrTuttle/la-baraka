import React from "react";
import dynamic from "next/dynamic";
import EventDetailSkeleton from "./loading";
import { Card, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";

const RoomForm = dynamic(() => import("../_components/EventDetailSkeleton"), {
  ssr: false,
  loading: () => <EventDetailSkeleton />,
});

interface Props {
  // params id: typed in string, 'cause url are always string
  params: { id: string };
}

const EventDetailPage = ({ params }: Props) => {
  return (
    <div className="px-11 pt-24">
      <Inset clip="padding-box" side="top" pb="current" className="mb-8">
        {/* <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  /> */}
        <Image
          width={100}
          height={100}
          alt="test"
          src="https://res.cloudinary.com/dc8rzbrbr/image/upload/v1705497113/zep6dh1m87dyo9m3zopr.jpg"
          style={{
            width: "100vw",
            height: "56vw",
            objectPosition: "center 50%",
            objectFit: "cover", // cover, contain, none
          }}
        />
      </Inset>
      <h1 className="prose">Evènement {params.id}</h1>

      <Text as="p" size="3">
        <Strong>Expo</Strong> Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Laboriosam, est? Quae vel adipisci provident tempore,
        nisi.
      </Text>
    </div>
  );
};

export default EventDetailPage;
