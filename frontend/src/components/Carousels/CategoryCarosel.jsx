import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";

const CategoryCarosel = ({ category }) => {
  const [product, setproduct] = useState(category);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
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
              cursor='pointer'
              _hover={{
                shadow:
                  " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
              spacing={2}
              key={i}
              h="25vh"
              mx={3}
            >
              <Box h="80%" p={5}>
                <Image h="full" src={ele?.url} alt="img" />
              </Box>
              <Text>{ele?.title}</Text>
            </VStack>
          ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarosel;
