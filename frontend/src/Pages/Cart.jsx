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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MyComponent from "../components/Buttons/MyComponent";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let cartState = useSelector((state) => state.cart);

  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    let updateArray = cartItem.filter((item) => item.id !== id);
    setCartItem(updateArray);
  };

  const handleAddProductIncriment = (id) => {
    const product = cartItem.map((item) =>
      item.id == id ? { ...item, itemcount: item.itemcount + 1 } : item
    );
    setCartItem(product);
  };

  const handleAddProductDecriment = (id) => {
    const product = cartItem.map((item) =>
      item.id == id ? { ...item, itemcount: item.itemcount - 1 } : item
    );
    setCartItem(product);
  };

  const handleProcedToPayment = () => {
    dispatch({ type: "EMPTY_CART" });
    setCartItem([]);
    toast({
      title: "Order Successful",
      status: "success",
      position: "top",
      duration: 9000,
      isClosable: true,
    });
    setTimeout(() => navigate("/"), 1000);
  };

  useMemo(() => {
    let totalpriceOfAllItem = cartItem.reduce(
      (acc, item) => acc + item.mrp * item.itemcount,
      0
    );
    let totalprice = cartItem.reduce(
      (acc, item) => acc + item.price * item.itemcount,
      0
    );

    setTotalItemsPrice(totalpriceOfAllItem);
    setTotalDiscount(totalpriceOfAllItem - totalprice);
    setTotal(totalprice + 4);
  }, [cartItem]);

  useEffect(() => {
    setCartItem(cartState);
  }, [cartState]);

  return (
    <Grid
      w={{ base: "95%", md: "90%", lg: "85%" }}
      m="auto"
      minH="80vh"
      templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
      gap={1}
      pt={10}
    >
      {/* ========================= */}
      <VStack
        alignItems="flex-start"
        spacing={10}
        borderRight={{ base: "none", lg: "1px solid #222" }}
      >
        <VStack alignItems="flex-start">
          <Heading as="h2" size="md">
            {cartItem.length} items added
          </Heading>
          <Text>Items not requiring prescription</Text>
        </VStack>

        <VStack>
          {cartItem &&
            cartItem?.map((ele) => (
              <Grid
                w="full"
                key={ele.id}
                templateColumns={{ base: "1fr", md: "1fr 4fr 2fr" }}
                gap={2}
              >
                <HStack
                  overflow="hidden"
                  h="100%"
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    h={{ base: "40px", md: "50px" }}
                    w="100%"
                    objectFit="contain"
                    src={ele?.url}
                    alt="product img"
                  />
                </HStack>

                <VStack alignItems="flex-start">
                  <Heading as="h2" size="md">
                    {ele?.name}
                  </Heading>
                  <Link onClick={() => handleDeleteItem(ele.id)}>remove</Link>
                </VStack>

                <VStack alignItems="flex-start">
                  <HStack>
                    <Text>₹{ele?.price * ele.itemcount}</Text>
                    <Text textDecoration="line-through">
                      ₹{ele?.mrp * ele.itemcount}
                    </Text>
                    <Text color="green">{ele?.discount}% off</Text>
                  </HStack>

                  <HStack
                    border="1px solid #ff6f61"
                    w={{ base: "70%", md: "50%" }}
                    rounded="md"
                    p={2}
                    justifyContent="space-between"
                  >
                    {ele.itemcount > 1 ? (
                      <MinusIcon
                        onClick={() => handleAddProductDecriment(ele.id)}
                        cursor="pointer"
                        color="#ff6f61"
                      />
                    ) : (
                      <RiDeleteBin6Line
                        cursor="pointer"
                        color="#ff6f61"
                        onClick={() => handleDeleteItem(ele.id)}
                      />
                    )}

                    <Text>{ele?.itemcount}</Text>
                    <AddIcon
                      cursor="pointer"
                      color="#ff6f61"
                      onClick={() => handleAddProductIncriment(ele.id)}
                    />
                  </HStack>
                </VStack>
              </Grid>
            ))}
        </VStack>
      </VStack>

      {/* ===================== */}
      <VStack alignItems="flex-start" p={6} spacing={4}>
        <VStack
          w="full"
          alignItems="flex-start"
          borderBottom="1px solid gray"
          pb={5}
        >
          <Image
            w={{ base: "60px", md: "80px" }}
            src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
            alt="logo"
          />
          <Heading fontWeight={500} as={"h5"} size="md">
            You can save extra ₹124 on this order
          </Heading>
          <Text color="#8a2422">Become a careplan member</Text>
          <Flex fontSize="sm" gap={2} flexWrap="wrap">
            <Text>3 months membership for only</Text>
            <Text fontWeight={500}>₹165</Text>
            <Text textDecoration="line-through">₹549</Text>
            <Text color="green">70% off</Text>
          </Flex>
          <Flex gap={2} w="full" flexDirection={{ base: "column", md: "row" }}>
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
          <HStack w="full" justifyContent="space-between">
            <Text fontSize="sm">Item total (MRP)</Text>
            <Text fontSize="sm">₹{totalItemsPrice}</Text>
          </HStack>

          <HStack w="full" justifyContent="space-between">
            <Text fontSize="sm">Green packaging charge</Text>
            <Text fontSize="sm">₹4</Text>
          </HStack>

          <HStack color="#208376" w="full" justifyContent="space-between">
            <Text fontSize="sm">Total discount</Text>
            <Text fontSize="sm">-₹{totalDiscount}</Text>
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
            <Text fontSize="lg">₹{total}</Text>
          </HStack>
        </VStack>

        <Button
          w="full"
          bg="#E86558"
          _hover={{ bg: "#e86458ca" }}
          color="#fff"
          onClick={handleProcedToPayment}
        >
          Continue
        </Button>
        {/* <MyComponent/> */}
      </VStack>
    </Grid>
  );
};

export default Cart;
