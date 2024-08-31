import { Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import React, { useState } from "react";

const MiddleNav = () => {
  const [location, setLocation] = useState("Pune");

  return (
    <>
      <HStack
        justifyContent="space-between"
        h={12}
        borderBottom="1px solid #f1f4f6"
        px={10}
        py={5}
      >
        <HStack ml={10}>
          <Flex bg="#F1F4F6" alignItems="center" px={3} py={1} gap={2}>
            <FaLocationDot />
            <input
              type="text"
              value={location}
              style={{ outline: "none", backgroundColor: "#F1F4F6", fontWeight:'bold' }}
              onChange={(e) => setLocation(e.target.value)}
            />
            <FaLocationCrosshairs />
          </Flex>
          <Flex bg="#F1F4F6" alignItems="center" px={3} py={1} gap={2}>
            <input
              type="text"
              placeholder="Search for Medicines and Health Products"
              style={{
                outline: "none",
                backgroundColor: "#F1F4F6",
                width: "80vh",
              }}
            />
            <IoSearchSharp />
          </Flex>
        </HStack>

        <Flex gap={3} alignItems='center'>
          <Text>QUICK BUY! Get 15% off on medicines*</Text>
          <Button bg="#FF6F61" color="#fff">Ouick order</Button>
        </Flex>
      </HStack>
    </>
  );
};

export default MiddleNav;
