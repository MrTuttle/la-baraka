//app/dashboard/page.tsx

import { Box, Flex } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/authOptions";
import UploadWidget from "../components/UploadWidget";

const pageDashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="prose mx-4">
      <h1>Dashboard</h1>
      <p>Bonjour {session && <span>{session.user!.name}</span>}</p>
      <Flex gap="5">
        <Link href="api/auth/signin">Sign in</Link>
        <Link href="api/auth/signout">Signout</Link>
      </Flex>
      <Flex gap="3" direction="column">
        <Box>
          <Link href="/chambres/new">Nouvelle chambre</Link>
        </Box>
        <Box>
          <Link href="/menus/new">Nouveau menu</Link>
        </Box>
        <Box>
          <h2>Gestion des images</h2>
          <p>
            <strong>1 </strong> | Ajouter une image à la bibliothèque cloudinary
          </p>

          <UploadWidget />
          <p>
            <strong>2 </strong> | Ajouter ensuite cette image à la base Baraka
            et lier l’identifiant d’une chambre :
          </p>
          <Link href="/images/new">AJouter l’image à une chambre</Link>
        </Box>
      </Flex>
    </div>
  );
};

export default pageDashboard;
