import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Link,
  VStack,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaShieldAlt,
  FaLock,
  FaWallet,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#FFFCF8" p={10}>
      <Box textAlign="center" py={10} borderBottom="1px solid #eee">
        <Flex justify="center" gap={10} fontWeight="bold" fontSize="2xl">
          <Text>260m+</Text>
          <Text>31m+</Text>
          <Text>1800+</Text>
        </Flex>
        <Flex justify="center" gap={10} mt={3} fontSize="sm" color="gray.500">
          <Text>Visitors</Text>
          <Text>Orders Delivered</Text>
          <Text>Cities</Text>
        </Flex>
        <Flex justify="center" mt={5}>
          <Input
            placeholder="Enter Phone Number"
            maxW="300px"
            borderColor="gray.300"
          />
          <Button colorScheme="red" ml={2}>
            Send Link
          </Button>
        </Flex>
      </Box>

      <Flex justify="space-between" py={10} wrap="wrap">
        <VStack align="flex-start" spacing={3} mb={5}>
          <Text fontWeight="bold">Know Us</Text>
          <Link >About Us</Link>
          <Link >Contact Us</Link>
          <Link >Press Coverage</Link>
          <Link >Careers</Link>
          <Link >Business Partnership</Link>
          <Link >Become a Health Partner</Link>
          <Link >Corporate Governance</Link>
        </VStack>

        <VStack align="flex-start" spacing={3} mb={5}>
          <Text fontWeight="bold">Our Policies</Text>
          <Link >Privacy Policy</Link>
          <Link >Terms and Conditions</Link>
          <Link >Editorial Policy</Link>
          <Link >Return Policy</Link>
          <Link >IP Policy</Link>
          <Link >Grievance Redressal Policy</Link>
          <Link >Fake Jobs and Fraud Disclaimer</Link>
        </VStack>

        <VStack align="flex-start" spacing={3} mb={5}>
          <Text fontWeight="bold">Our Services</Text>
          <Link >Order Medicines</Link>
          <Link >Book Lab Tests</Link>
          <Link >Consult a Doctor</Link>
          <Link >Ayurveda Articles</Link>
          <Link >Hindi Articles</Link>
          <Link >Care Plan</Link>
        </VStack>

        <VStack align="flex-start" spacing={3} mb={5}>
          <Text fontWeight="bold">Connect</Text>
          <HStack>
            <Link target="_blanck" href="https://www.facebook.com/1mgOfficial">
              <Icon as={FaFacebook} boxSize={5} />
            </Link>
            <Link target="_blanck" href="https://x.com/1mgofficial">
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
            <Link
              target="_blanck"
              href="https://www.instagram.com/1mgofficialpage/"
            >
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
            <Link target="_blanck" href="https://www.youtube.com/c/1mgofficial">
              <Icon as={FaYoutube} boxSize={5} />
            </Link>
            <Link target="_blanck" href="https://www.linkedin.com/company/1mg">
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
            <Link target="_blanck" href="https://medium.com/1mgofficial">
              <Icon as={FaWhatsapp} boxSize={5} />
            </Link>
          </HStack>
          <Button colorScheme="red" size="sm">
            SIGN UP
          </Button>
          <Flex gap={2} mt={5}>
            <Link target="_blanck" href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus&pli=1">
              <Image
                src="https://tse4.mm.bing.net/th?id=OIP.AYxU4dOa9Fuk_v3U5eRiLAHaFg&pid=Api&P=0&h=180"
                alt="Google Play"
                boxSize="150px"
                objectFit="contain"
              />
            </Link>
          </Flex>
        </VStack>
      </Flex>

      <Flex
        py={10}
        justify="space-around"
        borderTop="1px solid #eee"
        direction={["column", "row"]}
        textAlign="center"
      >
        <VStack align="center">
          <Icon as={FaShieldAlt} boxSize={8} />
          <Text fontWeight="bold">Reliable</Text>
          <Text fontSize="sm" color="gray.500">
            All products displayed on Tata 1mg are procured from verified and
            licensed pharmacies. All labs listed on the platform are accredited
          </Text>
        </VStack>

        <VStack align="center">
          <Icon as={FaLock} boxSize={8} />
          <Text fontWeight="bold">Secure</Text>
          <Text fontSize="sm" color="gray.500">
            Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
            Payment Card Industry Data Security Standard (PCI DSS) compliant
          </Text>
        </VStack>

        <VStack align="center">
          <Icon as={FaWallet} boxSize={8} />
          <Text fontWeight="bold">Affordable</Text>
          <Text fontSize="sm" color="gray.500">
            Find affordable medicine substitutes, save up to 50% on health
            products, up to 80% off on lab tests and free doctor consultations.
          </Text>
        </VStack>
      </Flex>

      <Text textAlign="center" fontSize="sm" mt={5} color="gray.500">
        India's only LegitScript and ISO/ IEC 27001:2022 certified online
        healthcare platform
      </Text>
    </Box>
  );
};

export default Footer;
