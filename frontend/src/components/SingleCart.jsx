import { useState } from "react";
// import "./App.css";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Stack,
  Badge,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

function App() {
  const [product, setProduct] = useState([
    {
      url: [
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/042a59da19874c64a7fecb8525774ae1.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/64a1d1d1fff54a85a622c6929e77e2a4.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/c182520372bd4ec2981032e355f787d7.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/70b7076376d948ed81e4f6af9443eacf.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/2361644fb9c84a96ac4c197b630c8ac0.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/43a904cf1e4647988e2005d0474b9d81.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/8809d36023e342b8b766e34eb00d2f94.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/4fc2ee1c7c74425f95c71c52cb078f44.jpg",
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/55687975ab6a414fb30d730702c45450.jpg",
      ],
      category: "Vitamins & Nutrition",
      name: "Oziva Plant Based Collagen Builder with Vitamin C & Biotin | Effervescent Tablet for Skin Health | Flavour",
      brand: "Zywie Ventures Pvt Ltd",
      price: 869,
      ratings: 4.3,
      reviews:
        "I've been using Swisse Beauty Vegan Collagen Builder for a month, and I'm really impressed with the results. My skin feels more supple and youthful. The addition of biotin and vitamin C is a great bonus, providing extra antioxidant support",
      highlights: [
        "Aids in collagen production",
        "Helps to enhance skin health",
        "Enhances skin elasticity",
        "Provides hydration to the body",
      ],
      mrp: 999,
      comboOffers: [
        {
          pack: 2,
          price: 1600,
          discount: 10,
          originalPrice: 1788,
        },
        {
          pack: 3,
          price: 2400,
          discount: 12,
          originalPrice: 2727,
        },
      ],
    },
  ]);


  return (
    <>
      <Flex direction="column" p="4" maxW="1200px" mx="auto">
        {/* Breadcrumb */}
        <Text fontSize="sm" color="gray.600">
          Home {">"} {product[0].category} {">"} {product[0].name}
        </Text>

        <Flex mt="4" align="start" justify="space-between">
          {/* Product Image and Highlights */}
          <Box flex="3">
          <HStack spacing={10}>
            <Image h='full' w='full' objectFit='contain' src={product[0].url[0]} alt={product[0].name} />

            <VStack align="start" mt="4">
              <Heading size="md">{product[0].name}</Heading>
              <Text>Brand: {product[0].brand}</Text>
              <Badge colorScheme="green" fontSize="lg">
                {product[0].ratings} ★
              </Badge>
              <Text color="gray.600">20 Ratings & 1 Reviews</Text>

              <Box mt="4">
                <Text fontWeight="bold">Product Highlights</Text>
                <ul>
                  {product[0].highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </Box>
            </VStack>
            </HStack>
          </Box>

          {/* Pricing and Offers */}
          <Box flex="2" p="4" bg="gray.50" borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" color="green.500">
              ₹{product[0].price}
            </Text>
            <Text as="del" color="gray.500">
              ₹{product[0].mrp}
            </Text>
            <Text color="green.500">
              {((1 - product[0].price / product[0].mrp) * 100).toFixed(0)}% off
            </Text>

            <Button colorScheme="red" mt="4" w="full">
              ADD TO CART
            </Button>

            <Text mt="4" color="gray.500">
              Inclusive of all taxes
            </Text>
            <Divider mt="4" />

            <Text mt="4" fontWeight="bold">
              Get it delivered by
            </Text>
            <Text>Thursday, 29 August</Text>
            <Text fontSize="sm" color="gray.600">
              Delivering to: 411022, Pune
            </Text>

            <Divider mt="4" />

            <Text fontWeight="bold" mt="4">
              Additional Offers
            </Text>
            <Text fontSize="sm">
              Amazon Pay: Pay with Amazon Pay Balance and get cashback up to Rs.
              100 with a minimum cashback of Rs. 20. Offer ends 31st Aug 2024.
            </Text>

            <Divider mt="4" />

            <Text fontWeight="bold" mt="4">
              Combo Offers
            </Text>
            {product[0].comboOffers.map((offer, index) => (
              <Text key={index} fontSize="sm">
                Pack of {offer.pack} for ₹{offer.price} ({offer.discount}% off,
                original price: ₹{offer.originalPrice})
              </Text>
            ))}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
