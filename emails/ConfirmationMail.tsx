// emails/ConfirmationMail.tsx

import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const ConfirmationMail = ({ name }: { name: string }) => {
  return (
    <html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="http://www.apple.com">www.apple.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </html>
  );
};

export default ConfirmationMail;
