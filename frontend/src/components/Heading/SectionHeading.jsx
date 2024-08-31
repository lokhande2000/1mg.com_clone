import { Box, Button, Heading, HStack, Link } from "@chakra-ui/react";
import React from "react";

const SectionHeading = ({heading}) => {
  return (
    <Box p={5} bg="#F6F6F6" shadow="md">
      <HStack w="80%" m="auto" justifyContent='space-between'>
        <Heading fontWeight={400} as="h3" fontSize="lg">
          {heading}
        </Heading>

        <Link color='#fff' fontWeight='bold' cursor='pointer' _hover={{textDecoration:'none'}} bg='#ff6f61' rounded='4px' px={2}>SEE ALL</Link>
      </HStack>
    </Box>
  );
};

export default SectionHeading;
