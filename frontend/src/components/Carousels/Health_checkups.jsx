import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { useState } from "react";

const Health_checkups = ({ category }) => {
  const [product, setproduct] = useState(category);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <Box
        as="button"
        position="absolute"
        left="10px"
        top="50%"
        backgroundColor="#fff"
        borderRadius="50%"
        padding="10px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={onClick}
        cursor="pointer"
        _hover={{ color: "blue" }}
      >
        <MdArrowBackIosNew size="20px" color="#FF6F61" />
      </Box>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <Box
        as="button"
        position="absolute"
        right="10px"
        top="50%"
        backgroundColor="#fff"
        borderRadius="50%"
        padding="10px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={onClick}
        cursor="pointer"
        _hover={{ color: "blue" }}
      >
        <MdArrowForwardIos size="20px" color="#FF6F61" />
      </Box>
    );
  };

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {product &&
          product.map((ele, i) => (
            <VStack
              _hover={{
                shadow:
                  " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
              spacing={2}
              key={i}
              h="25vh"
              mx={3}
              px={2}
              py={4}
              justifyContent='space-between'
              cursor='pointer'
            >
              <HStack alignItems='flex-start' justifyContent='flex-start'>
                <Heading as="h3" fontSize="sm">
                  {ele?.title}
                </Heading>
                <Flex alignItems="center" bg="#ffe3c2" px={1}>
                  <MdOutlineHealthAndSafety />
                  <Text fontWeight="bold" fontSize="14px">
                    SAFE
                  </Text>
                </Flex>
              </HStack>

              <HStack justifyContent='flex-start' alignItems='flex-start'>
                <Flex alignItems="center" gap={1}>
                  <Text fontWeight="bold"> ₹{ele?.price}</Text>
                  <Text textDecoration="line-through">
                    ₹{ele?.discount_price}
                  </Text>
                </Flex>
                <Box bg="#1aab2a0d" px={2} border="1px dashed #1aab2a">

                    <Text color="#1aab2a">50% Off</Text>
                    
                </Box>
              </HStack>
            </VStack>
          ))}
      </Carousel>
    </div>
  );
};

export default Health_checkups;
