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

interface Props {
  title: string;
  roomId: number;
  reservation: string;
}
// { roomId }: { roomId: number }
// { name }: { name: string }

const ConfirmationMail = ({ title, roomId, reservation }: Props) => {
  return (
    <html>
      <Preview>Reservation à La Baraka </Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello Laetitia</Text>
            Monsieur et Madame
            <Text>
              Demandent que tu les rapelles pour confirmer la reservation de la
              chambre {title} ’’ Id: {roomId} ’’pour les dates suivantes :{" "}
              <br />
              {reservation}
            </Text>
            <Link href="http://www.apple.com">www.apple.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </html>
  );
};

export default ConfirmationMail;
