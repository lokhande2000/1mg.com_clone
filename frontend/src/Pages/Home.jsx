import { useEffect, useState } from "react";
const url = import.meta.env.VITE_SERVER_URL
import axios from "axios";
import HomeCarousel from "../components/Carousels/HomeCarousel";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import ProductCardCarousel from "../components/Carousels/ProductCardCarousel";
import SectionWraper from "../components/WraperComponents/SectionWraper";
import CategoryCarosel from "../components/Carousels/CategoryCarosel";
import { body_health_checkups, featured_brands, pathology_Tests, personal_care, Shop_by_health_concerns } from "../components/config/productsArray";
import Health_checkups from "../components/Carousels/Health_checkups";
import SectionHeading from "../components/Heading/SectionHeading";

const Home = () => {

  const [data, setData] = useState([])

  // console.log(data)
  async function getData() {
    try {
      let result = await axios.get(
        `${url}/products/allProducts`
      );
      setData(result?.data); // Log the response data, not the whole result
    } catch (error) {
      console.error("Failed to fetch data:", error.message); // More descriptive error message
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Stack w="full" mb={10}>
      <HStack spacing={0} flexDirection={{ base: "column", lg: "row" }}>
        <Box h="30vh" w={{ base: "full", lg: "70%" }}>
          <HomeCarousel />
        </Box>
        {/* <Box h='100%' w='30%'> */}
        <Image
          h="30vh"
          w={{ base: "full", lg: "30%" }}
          src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png"
          alt="banner"
        />
        {/* </Box> */}
      </HStack>

      <HStack justifyContent="center" shadow="md" py={5}>
        <Text fontSize="xl" color="#666" letterSpacing={3}>
          Tata 1mg: India's Leading Online Pharmacy & Healthcare Platform
        </Text>
      </HStack>

      <VStack py={5} spacing={5}  bg="#F6F6F6" shadow="md">
        <HStack justifyContent="center">
          <Image
            cursor="pointer"
            w="80%"
            src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png"
            alt="banner"
          />
        </HStack>
        <HStack  w='full'>
          <Text w='80%' fontSize='lg' m='auto'>Shop by health concerns</Text>
        </HStack>
      </VStack>

      {/* <Box py={5} px={10} bg='#111'>

      <ProductCardCarousel/>
      </Box> */}

      <SectionWraper>
      <CategoryCarosel category={ Shop_by_health_concerns }/>
      </SectionWraper>

      <SectionHeading heading='Full body health checkups'/>
      <SectionWraper>
      <Health_checkups category={ body_health_checkups }/>
      </SectionWraper>

      <SectionHeading heading='Featured brands'/>
      <SectionWraper>
      <CategoryCarosel category={ featured_brands }/>
      </SectionWraper>

      <SectionHeading heading='Collagen | supplement of the week'/>
      <SectionWraper>
        <ProductCardCarousel data={data} title='Collagen | supplement of the week'/>
      </SectionWraper>

      <SectionHeading heading='Personal care'/>
      <SectionWraper>
      <CategoryCarosel category={ personal_care }/>
      </SectionWraper>


      <SectionHeading heading='Pathology Tests | Up to 70% off'/>
      <SectionWraper>
      <Health_checkups category={ pathology_Tests }/>
      </SectionWraper>

      <SectionHeading heading='Super saving deals'/>
      <SectionWraper>
        <ProductCardCarousel data={data} title='Super saving deals'/>
      </SectionWraper>

      <SectionHeading heading='Skin care products'/>
      <SectionWraper>
        <ProductCardCarousel data={data} title='Skin care products'/>
      </SectionWraper>

      <SectionHeading heading='Popular Combo Deals'/>
      <SectionWraper>
        <ProductCardCarousel data={data} title='Popular Combo Deals'/>
      </SectionWraper>

      <SectionHeading heading='Top deals of pain relief and cough & cold'/>
      <SectionWraper>
        <ProductCardCarousel data={data} title='Top deals of pain relief and cough & cold'/>
      </SectionWraper>


     
    </Stack>
  );
};

export default Home;
