import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCardCarousel = ({ data, title }) => {
  // console.log(data?.filter((item) => item.heading == title));

  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2,
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

  const handleClick = (name,id)=>{
      // console.log(id)
      navigate(`/singleproduct/${name}/${id}`)
      window.scrollTo(0, 0); 
  }

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
        {data &&
          data
            ?.filter((item) => item.heading == title)
            .map((ele) => (
              <VStack
                cursor="pointer"
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

                onClick={()=> handleClick(ele.name,ele._id)}
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
                    color='#212121'
                  >
                    {ele.name}
                  </Heading>
                  <Text color='#757575' fontSize="12px">Bottle to 30.0 tablets</Text>
                  <Text color='#757575' fontSize="12px">
                    Delivery by <b>10pm Today</b>
                  </Text>
                </VStack>

                <Box>
                  <Flex fontSize="12px" gap={1}>
                    <Text color='#757575'>MRP</Text>
                    <Text color='#757575' textDecoration="line-through">
                      ₹{ele?.comboOffers[0]?.originalPrice || ele.mrp}
                    </Text>
                    <Text color="#1aab2a">{ele?.comboOffers[0]?.discount || 30}%</Text>
                  </Flex>
                  <Text color="#000">
                    ₹{ele?.comboOffers[0]?.price || 1000}
                  </Text>
                </Box>
              </VStack>
            ))}
      </Carousel>
    </div>
  );
};

export default ProductCardCarousel;
