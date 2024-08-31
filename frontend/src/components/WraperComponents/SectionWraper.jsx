import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const SectionWraper = ({ children }) => {
  return (
    <HStack shadow="md" w="full">
      <Box m='auto' w='80%'>{children}</Box>
    </HStack>
  );
};

export default SectionWraper;
