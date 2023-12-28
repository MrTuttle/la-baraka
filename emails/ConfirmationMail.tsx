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
      <Preview>Reservation à La Baraka </Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            Monsieur et Madame {name}
            <Text>
              Demandent que tu les rapelles pour confirmer la reservation de la
              chambre ’’ les ’’
            </Text>
            <Link href="http://www.apple.com">www.apple.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </html>
  );
};

export default ConfirmationMail;
