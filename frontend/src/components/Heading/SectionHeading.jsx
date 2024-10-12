import { Box, Button, Heading, HStack, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SectionHeading = ({ heading }) => {
  const navigate = useNavigate();
  const handleMoveRoute = () => {
    navigate("/products");
  };

  return (
    <Box p={5} bg="#F6F6F6" shadow="md">
      <HStack w="80%" m="auto" justifyContent="space-between">
        <Heading fontWeight={400} as="h3" fontSize="lg">
          {heading}
        </Heading>

        <Link
          onClick={handleMoveRoute}
          color="#fff"
          fontWeight="bold"
          cursor="pointer"
          _hover={{ textDecoration: "none" }}
          bg="#ff6f61"
          rounded="4px"
          px={2}
        >
          SEE ALL
        </Link>
      </HStack>
    </Box>
  );
};

export default SectionHeading;
