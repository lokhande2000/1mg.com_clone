import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Radio,
  Select,
  SimpleGrid,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionType from "../../redux/actionTypes";

const url = import.meta.env.VITE_SERVER_URL;

const SingleProductCard = () => {
  const [data, setData] = useState({
    _id: "66cd9ea3834df9acfcbb5f12",
    heading: "Super saving deals",
    url: [
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_12…_120,c_fit,q_auto,f_auto/shfpkggram7uvubuxqkg.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_12…_120,c_fit,q_auto,f_auto/mfb0zkgbnz6hguh60pzh.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_12…_120,c_fit,q_auto,f_auto/xwemq98k1nmdivvzf0cy.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_12…_120,c_fit,q_auto,f_auto/ovcg1ovcfp0a9yqg4lna.jpg",
    ],
    category: "Stomach Care",
    name: "Easylax L Oral Solution Lemon Sugar Free",
    brand: "Cipla Ltd",
    price: 211,
    ratings: 4.1,
    reviews:
      "Easylax L helps in providing long-term relief from constipation. Acts as a laxative to ease bowel movement.",
    highlights: [
      "Provides long-term relief from constipation",
      "Acts as a laxative to ease bowel movement",
    ],
    mrp: 258.31,
    comboOffers: [
      {
        pack: 1,
        price: 109,
        discount: 15,
        originalPrice: 129,
        _id: "66cd9ea3834df9acfcbb5f13",
      },
      {
        pack: 2,
        price: 211,
        discount: 18,
        originalPrice: 258.31,
        _id: "66cd9ea3834df9acfcbb5f14",
      },
    ],
  });
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    mrp: 0,
    itemcount: 1,
    url: "",
    discount: 5,
  });
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cartState = useSelector((state) => state.cart);

  // console.log(data);
  const getSingleProduct = async (id) => {
    try {
      const res = await axios.post(`${url}/products/singleProduct/${id}`);
      setData(res.data);
    } catch (error) {
      console.error("Something went wrong:", error.message);
    }
  };

  const handleAddToCard = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      id: data._id,
      name: data.name,
      price: data.price,
      mrp: data.mrp,
      url: data.url[0],
      discount: data?.comboOffers[0]?.discount || 5,
    }));

    toast({
      title: "Item added Successfully.",
      status: "success",
      position: "top",
      duration: 1000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (product.id) {
      let result = cartState.filter((ele) => ele.id === product.id);
      if (result.length == 0) {
        dispatch({ type: actionType.ADD_TO_CART, payload: product });
      }
    }
  }, [product, dispatch]);

  useEffect(() => {
    if (id) {
      getSingleProduct(id);
    }
  }, [id]);

  return (
    <VStack spacing={5} py={5}>
      <Flex w="90%" m="auto" fontSize="sm">
        {" "}
        <Text cursor="pointer" onClick={() => navigate("/")}>
          Home &gt;{" "}
        </Text>{" "}
        <Text>{data.category} &gt; </Text> {data.name}
      </Flex>
      <SimpleGrid w="90%" m="auto" h="80vh" columns={3} spacing={1}>
        <Grid h="100%" templateColumns="1fr 5fr" gap={1} overflow="hidden">
          {/* Vertical Carousel */}
          <VStack className="vertical" h="60%" overflowY="scroll">
            {data?.url?.map((ele, i) => (
              <Image
                key={i}
                _hover={{ border: "1px solid red" }}
                cursor="pointer"
                src={ele}
                alt={`Product image ${i}`}
                onClick={() => setCount(i)}
                border={count === i ? "2px solid red" : "none"}
              />
            ))}
          </VStack>

          {/* Main Image Display */}
          <VStack h="70%" justifyContent="center" overflow="hidden">
            {data?.url && data.url.length > 0 ? (
              <Image
                maxH="70%"
                w="100%"
                objectFit="contain"
                src={data.url[count]}
                alt="Selected product"
              />
            ) : (
              <Box>No images available</Box>
            )}
          </VStack>
        </Grid>
        {/* ========================= */}
        <VStack mt={12} alignItems="flex-start" px={5}>
          <Heading as="h2" fontSize="xl">
            {data?.name}
          </Heading>
          <Text fontSize="14px" color="#ff6f61">
            {data?.brand}
          </Text>
          <Heading as="h2" fontSize="lg" fontWeight={500} color="#212121">
            Product highlights
          </Heading>

          <Box>
            {data?.highlights?.map((ele, i) => (
              <HStack key={i} alignItems="flex-start">
                <li></li>
                <Text fontSize="sm">{ele}</Text>
              </HStack>
            ))}
          </Box>
        </VStack>

        {/* ========================= */}

        <VStack h="100%" spacing={5}>
          <VStack
            // h="40%"
            shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            w="full"
            rounded="lg"
            spacing={6}
            pb={4}
            overflow="hidden"
          >
            <Flex
              alignItems="center"
              px={4}
              gap={2}
              py={1}
              bg="#EDF9EE"
              w="full"
            >
              <Image
                src="https://www.1mg.com/images/social_cue.svg"
                alt="logo"
              />
              <Text fontSize="sm">{data?.reviews}</Text>
            </Flex>

            <VStack alignItems="flex-start" w="full" px={5} spacing={5}>
              <HStack alignItems="flex-start">
                <Radio size="lg" name="1" colorScheme="orange"></Radio>
                <Flex gap={1} alignItems="center">
                  {/* <Text>₹{data.comboOffers[0]?.price}</Text> */}
                  <Text>₹{data?.price}</Text>
                  <Text textDecoration="line-through" fontSize="sm">
                    {/* ₹{data.comboOffers.length > 0 ? data.comboOffers[0].originalPrice : 1200} */}
                    ₹{data?.mrp}
                  </Text>
                  <Text fontSize="sm" color="#1aab2a">
                    {data.comboOffers.length > 0
                      ? data.comboOffers[0].discount
                      : 5}
                    %off
                  </Text>
                </Flex>
              </HStack>

              <HStack alignItems="flex-start">
                <Radio size="lg" name="1" colorScheme="orange"></Radio>
                <Flex gap={1} alignItems="center">
                  <Text>₹{data.comboOffers[0]?.price || data?.price}</Text>
                  <Text fontSize="md">+ free shipping with</Text>
                  <Image
                    src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png"
                    alt="img"
                  />
                </Flex>
              </HStack>

              <Text fontSize="sm">Inclusive of all taxes</Text>
              <Grid
                gap={2}
                gridTemplateColumns="1fr 2fr"
                w="full"
                alignItems="center"
              >
                <Select
                  value={product.itemcount}
                  cursor="pointer"
                  size="xs"
                  onChange={(e) =>
                    setProduct({ ...product, itemcount: +e.target.value })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Select>
                <Text fontSize="sm">of 30 tablets</Text>
              </Grid>

              <Button
                onClick={handleAddToCard}
                w="full"
                colorScheme="teal"
                bg="#FF6F61"
              >
                Add to Card
              </Button>
            </VStack>
          </VStack>

          <Box
            shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            w="full"
            rounded="lg"
            p={5}
          >
            <Flex gap={1}>
              <Text>Get it delivered by </Text>
              <Text color="#00b62f" fontWeight="bold">
                10pm, Tomorrow{" "}
              </Text>
            </Flex>

            <Text fontSize="sm">
              Delivering to: <b> 411022, Pune</b>
            </Text>
          </Box>

          <Image
            w="full"
            src="https://onemg.gumlet.io/92c47132-6e46-490d-98a9-2d2ad34620cd_1722837599.jpg?w=298&h=68&format=auto"
            alt="img"
          />
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default SingleProductCard;
