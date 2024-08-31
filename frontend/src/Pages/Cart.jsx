import {
  Box,
  Grid,
  Link,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
  Button,
  Checkbox,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AddIcon } from "@chakra-ui/icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MyComponent from '../components/Buttons/MyComponent';
// import { Link } from "react-router-dom";

const Cart = () => {
  let cartState = useSelector((state) => state.cart);

  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    setCartItem(cartState);
  }, [cartState]);

  return (
    <Grid
      w="85%"
      m="auto"
      minH="80vh"
      templateColumns="2fr 1fr"
      gap={1}
      pt={10}
    >
      {/* ========================= */}
      <VStack alignItems="flex-start" spacing={10} borderRight="1px solid #222">
        <VStack alignItems="flex-start">
          <Heading as="h2" size="md">
            {cartItem.length} items added
          </Heading>
          <Text>Items not requiring prescription</Text>
        </VStack>

        <VStack>
          {cartItem &&
            cartItem?.map((ele) => (
              <Grid w="full" key={ele.id} templateColumns="1fr 4fr 2fr" gap={2}>
                <HStack
                  overflow="hidden"
                  h="100%"
                  w="100%"
                  justifyContent="center"
                >
                  <Image
                    h="65px"
                    objectFit="contain"
                    w="100%"
                    src={ele?.url}
                    alt="product img"
                  />
                </HStack>

                <VStack alignItems="flex-start">
                  <Heading as="h2" size="md">
                    {ele?.name}
                  </Heading>
                  <Link>remove</Link>
                </VStack>

                <VStack alignItems="flex-start">
                  <HStack>
                    <Text>₹{ele?.price}</Text>
                    <Text textDecoration="line-through">₹{ele?.mrp}</Text>
                    <Text color="green">{ele?.discount}% off</Text>
                  </HStack>

                  <HStack
                    border="1px solid #ff6f61"
                    w="50%"
                    rounded="md"
                    p={2}
                    justifyContent="space-between"
                  >
                    <RiDeleteBin6Line color="#ff6f61" />
                    <Text>{ele?.itemcount}</Text>
                    <AddIcon color="#ff6f61" />
                  </HStack>
                </VStack>
              </Grid>
            ))}
        </VStack>
      </VStack>

      {/* ===================== */}
      <VStack alignItems="flex-start" p={6}>
        <VStack
          w="full"
          alignItems="flex-start"
          borderBottom="1px solid gray"
          pb={5}
        >
          <Image
            w="80px"
            src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
            alt="logo"
          />
          <Heading fontWeight={500} as={"h5"} size="md">
            You can save extra ₹124 on this order
          </Heading>
          <Text color="#8a2422">Become a careplan member</Text>
          <Flex fontSize="sm" gap={2}>
            <Text>3 months membership for only</Text>
            <Text fontWeight={500}>₹165</Text>
            <Text textDecoration="line-through">₹549</Text>
            <Text color="green">70% off</Text>
          </Flex>
          <Flex gap={2} w="full">
            <Button
              bg="inherit"
              color="#E86558"
              border="1px solid #E86558"
              _hover={{ bg: "#FFDCD9" }}
              w="100%"
            >
              Know more
            </Button>
            <Button
              w="100%"
              bg="#E86558"
              _hover={{ color: "#E86558", bg: "#FFDCD9" }}
              color="#fff"
            >
              Add membership
            </Button>
          </Flex>
        </VStack>

        <Flex
          borderBottom="7px solid #F0F0F0"
          w="full"
          py={3}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack spacing={2}>
            <Image
              src="https://assets.1mg.com/pwa-app/production/dweb/2.0.1/static/images/svgs/icons/coupon_18px_primary.svg"
              alt="img"
            />
            <Text fontWeight={500}>Apply coupon</Text>
          </HStack>
          <MdOutlineArrowForwardIos />
        </Flex>

        <VStack
          spacing={2}
          alignItems="flex-start"
          w="full"
          borderBottom="7px solid #F0F0F0"
          py={3}
        >
          <HStack w="full" justifyContent="space-between">
            <Text>Check the health of your vital organs</Text>
            <Image
              src="https://assets.1mg.com/pwa-app/production/dweb/2.0.1/static/images/svgs/icons/information_24px_primary.svg"
              alt="img"
            />
          </HStack>
          <HStack w="full" alignItems="flex-start" spacing={2}>
            <Box>
              <Checkbox size="lg" colorScheme="orange"></Checkbox>
            </Box>
            <Box>
              <Text fontWeight={500}>
                Book Good Health Silver Package for just ₹649
              </Text>
              <Text fontSize="sm">
                Get the tests done easily from your home. This package will help
                you in identifying potential disorders and deficiencies at an
                early stage.
              </Text>
              <Text fontSize="sm" color="#208376">
                Pay later on home sample collection
              </Text>
            </Box>
          </HStack>
        </VStack>

        <VStack
          w="full"
          alignItems="flex-start"
          borderBottom="7px solid #F0F0F0"
          py={3}
        >
          <Heading size="md">Bill summary</Heading>
          <HStack
            w="full"
            justifyContent="space-between"
          >
            <Text fontSize="sm">Item total (MRP)</Text>
            <Text fontSize="sm">₹3799</Text>
          </HStack>

          <HStack w="full" justifyContent="space-between">
            <Text fontSize="sm">Green packaging charge</Text>
            <Text fontSize="sm">₹4</Text>
          </HStack>

          <HStack color="#208376" w="full" justifyContent="space-between">
            <Text fontSize="sm">Total discount</Text>
            <Text fontSize="sm">-₹1550</Text>
          </HStack>

          <HStack
            borderBottom="1px solid gray"
            pb={2}
            color="#208376"
            w="full"
            justifyContent="space-between"
          >
            <Text fontSize="sm">Shipping fee</Text>
            <Text fontSize="sm">Free</Text>
          </HStack>

          <HStack fontWeight="bold" w="full" justifyContent="space-between">
            <Text fontSize="lg">To be paid</Text>
            <Text fontSize="lg">₹2253</Text>
          </HStack>
        </VStack>

        <Button  w='full' bg="#E86558" _hover={{bg:"#e86458ca"}} color='#fff'>Continue</Button>
        {/* <MyComponent/> */}
      </VStack>
    </Grid>
  );
};

export default Cart;
