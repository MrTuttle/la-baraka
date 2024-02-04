import React from "react";
import {
  Button,
  Card,
  Container,
  Flex,
  Inset,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import SectionFramerRight from "./SectionFramerRight";
import SectionFramer from "./SectionFramer";

const EventOverFlowContainer = () => {
  return (
    <div className="flex gap-4 overflow-x-auto px-8 pb-8 mb-11">
      <SectionFramerRight>
        <Card size="2" style={{ maxWidth: 440, minWidth: 240, height: "100%" }}>
          <Inset clip="padding-box" side="top" pb="current">
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
                width: "100%",
                height: "120px",
                objectPosition: "center 50%",
                objectFit: "cover", // cover, contain, none
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Expo</Strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Laboriosam, est? Quae vel adipisci provident
            tempore, nisi.
          </Text>
        </Card>
      </SectionFramerRight>
      <SectionFramerRight>
        <Card size="2" style={{ maxWidth: 440, minWidth: 240, height: "100%" }}>
          <Inset clip="padding-box" side="top" pb="current">
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
              src="https://res.cloudinary.com/dc8rzbrbr/image/upload/v1705496938/vjrsfwhisynzejerhroh.png"
              style={{
                width: "100%",
                height: "120px",
                objectPosition: "center 50%",
                objectFit: "cover", // cover, contain, none
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Concert</Strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </Text>
        </Card>
      </SectionFramerRight>
      <SectionFramerRight>
        <Card size="2" style={{ maxWidth: 440, minWidth: 240, height: "100%" }}>
          <Inset clip="padding-box" side="top" pb="current">
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
                width: "100%",
                height: "120px",
                objectPosition: "center 50%",
                objectFit: "cover", // cover, contain, none
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Expo</Strong> is the art and technique of arranging type to
            make written language legible, readable and appealing when
            displayed.
          </Text>
        </Card>
      </SectionFramerRight>
    </div>
  );
};

export default EventOverFlowContainer;
