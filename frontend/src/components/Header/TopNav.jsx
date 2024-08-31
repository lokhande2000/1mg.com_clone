import React from "react";
import {
  Button,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../../Pages/AuthModal";
import { useSelector } from "react-redux";

const TopNav = () => {
  const navigate = useNavigate();
  let cartState = useSelector((state) => state.cart);
  return (
    <HStack
      justifyContent="space-between"
      h={12}
      borderBottom="1px solid #f1f4f6"
      px={10}
      py={5}
    >
      <Link to="/">
        <Image src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="logo" />
      </Link>
      <HStack spacing={5}>
        <Link>
          <Heading
            as="h4"
            size="sm"
            _hover={{ color: "#FF6F61" }}
            color="#FF6F61"
          >
            MEDICINES
          </Heading>
        </Link>

        <Link>
          <HStack spacing={1}>
            <Heading as="h4" size="sm" _hover={{ color: "#FF6F61" }}>
              LAB TESTS
            </Heading>
            <Text
              fontSize="10px"
              fontWeight="bold"
              color="#fff"
              px={1}
              bg="#FF6F61"
            >
              SAFE
            </Text>
          </HStack>
        </Link>

        <Link>
          <Heading as="h4" size="sm" _hover={{ color: "#FF6F61" }}>
            CONSULT DOCTORS
          </Heading>
        </Link>

        <Link>
          <Heading as="h4" size="sm" _hover={{ color: "#FF6F61" }}>
            CANCER CARE
          </Heading>
        </Link>

        <Link>
          <HStack spacing={1}>
            <Heading as="h4" size="sm" _hover={{ color: "#FF6F61" }}>
              PARTNERSHIPS
            </Heading>
            <Text
              fontSize="10px"
              fontWeight="bold"
              color="#fff"
              px={1}
              bg="#FF6F61"
            >
              NEW
            </Text>
          </HStack>
        </Link>

        <Link>
          <HStack spacing={1}>
            <Heading as="h4" size="sm" _hover={{ color: "#FF6F61" }}>
              CARE PLAN
            </Heading>
            <Text
              fontSize="10px"
              fontWeight="bold"
              color="#fff"
              px={1}
              bg="#FF6F61"
            >
              SAVE MORE
            </Text>
          </HStack>
        </Link>
      </HStack>

      <HStack spacing={5}>
        <Menu>
          <MenuButton as={Button} variant="link" cursor="pointer">
            <Image
              h="20px"
              src="https://onemg.gumlet.io/profile-rebrand_aboy0q.svg"
              alt="profile"
            />
            {/* <Text>Health Resource Center</Text> */}
          </MenuButton>
          <MenuList>
            <Link>
              <MenuItem
                borderBottom="2px solid #f1f4f6"
                fontWeight="bold"
                color="#333"
              >
                Hii there!
              </MenuItem>
            </Link>
            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                View Profile
              </MenuItem>
            </Link>
            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                My Orders
              </MenuItem>
            </Link>

            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                Previously Ordered Items
                <Text
                  mx={1}
                  fontSize="10px"
                  fontWeight="bold"
                  color="#fff"
                  px={1}
                  bg="#FF6F61"
                >
                  NEW
                </Text>
              </MenuItem>
            </Link>

            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                Rate your Recent Purchases
                <Text
                  mx={1}
                  fontSize="10px"
                  fontWeight="bold"
                  color="#fff"
                  px={1}
                  bg="#FF6F61"
                >
                  NEW
                </Text>
              </MenuItem>
            </Link>

            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                My Lab Tests
              </MenuItem>
            </Link>

            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                My Consultations
              </MenuItem>
            </Link>

            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                My Health Records
                <Text
                  mx={1}
                  fontSize="10px"
                  fontWeight="bold"
                  color="#fff"
                  px={1}
                  bg="#FF6F61"
                >
                  NEW
                </Text>
              </MenuItem>
            </Link>

            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                Manage Payments
              </MenuItem>
            </Link>

            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                Care Plan
              </MenuItem>
            </Link>
            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                NeuCoins
              </MenuItem>
            </Link>
            <Link>
              <MenuItem fontWeight="bold" fontSize="sm" color="#666">
                Logout
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <AuthModal />

        <Link>Offers</Link>

        <Link to="/cart">
          <HStack spacing={0}>
            <Image
              w="25px"
              src="https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg"
              alt="cart"
            />
            <Text mb={4} bg="red" fontSize="10px" p="5px" rounded="100%">
              {cartState.length}
            </Text>
          </HStack>
        </Link>

        <Link>Need Helf?</Link>
      </HStack>
    </HStack>
  );
};

export default TopNav;
