import axios from "axios";
const url = import.meta.env.VITE_SERVER_URL;
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  //   console.log(products)
  async function getData() {
    try {
      let result = await axios.get(`${url}/products/allProducts`);
      setProducts(result?.data); // Log the response data, not the whole result
    } catch (error) {
      console.error("Failed to fetch data:", error.message); // More descriptive error message
    }
  }

  const handleClick = (name, id) => {
    // console.log(id)
    navigate(`/singleproduct/${name}/${id}`);
  };

  useMemo(() => {
    if (sort == "asc") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (sort == "desc") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
  }, [sort]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);
  // console.log(products)
  return (
    <Box minH="100vh" px="10%">
      <HStack p={5} spacing={10} bg="blue.400" rounded="md">
        <Select
          onChange={(e) => setSort(e.target.value)}
          placeholder="Select option"
          bg="#fff"
          fontWeight={500}
        >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </Select>

        <Select placeholder="Select option" bg="#fff" fontWeight={500}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Select placeholder="Select option" bg="#fff" fontWeight={500}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
      <SimpleGrid py={6} columns={4} spacing={10}>
        {products &&
          products.map((ele) => (
            <VStack
              cursor="pointer"
              shadow="2xl"
              _hover={{
                shadow:
                  " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
              spacing={4}
              key={ele._id}
              // h="25vh"
              mx={3}
              justifyContent="space-between"
              alignItems="flex-start"
              p={2}
              rounded="lg"
              onClick={() => handleClick(ele.name, ele._id)}
            >
              <Image
                w="full"
                h={"150px"}
                objectFit="contain"
                src={ele.url[0]}
                alt="img"
              />

              <VStack spacing={2} alignItems="flex-start">
                <Heading
                  h={9}
                  w="full"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  as="h3"
                  fontSize="sm"
                  fontWeight={400}
                  color="#212121"
                >
                  {ele.name}
                </Heading>
                <Text color="#757575" fontSize="12px">
                  Bottle to 30.0 tablets
                </Text>
                <Text color="#757575" fontSize="12px">
                  Delivery by <b>10pm Today</b>
                </Text>
              </VStack>

              <Box>
                <Flex fontSize="12px" gap={1}>
                  <Text color="#757575">MRP</Text>
                  <Text color="#757575" textDecoration="line-through">
                    ₹{ele?.comboOffers[0]?.originalPrice || ele.mrp}
                  </Text>
                  <Text color="#1aab2a">
                    {ele?.comboOffers[0]?.discount || 30}%
                  </Text>
                </Flex>
                <Text color="#000">₹{ele?.comboOffers[0]?.price || 1000}</Text>
              </Box>
            </VStack>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default AllProducts;
