import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const pageDashboard = () => {
  return (
    <div className="mx-4">
      <h1>Dashboard</h1>
      <Flex gap="3" direction="column">
        <Box>
          <Link href="/chambres/new">Nouvelle chambre</Link>
        </Box>
        <Box>
          <Link href="/menus/new">Nouveau menu</Link>
        </Box>
      </Flex>
    </div>
  );
};

export default pageDashboard;
