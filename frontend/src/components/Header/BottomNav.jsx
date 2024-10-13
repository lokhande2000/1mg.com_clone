import { useState } from "react";
import {
  Menu,
  HStack,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpen = (menu) => setOpenMenu(menu);
  const handleClose = () => setOpenMenu(null);

  return (
    <HStack
      spacing={3}
      justifyContent="center"
      borderBottom="1px solid #f1f4f6"
      py={2}
    >
      <Menu isOpen={openMenu === "health"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("health")}
          onMouseLeave={handleClose}
        >
          Health Resource Center <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("health")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              All Diseases
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              All Medicines
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Medicines by Therapeutic Class
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Vitamins"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Vitamins")}
          onMouseLeave={handleClose}
        >
          Vitamins & Nutrition <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Vitamins")}
          onMouseLeave={handleClose}
        >
          <HStack alignItems="flex-start">
            <VStack
              spacing={0}
              alignItems="flex-start"
              borderRight="1px solid #333"
            >
              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Multivitamins
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Kids
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Women
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Sports
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Vegetarian
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Omega & Fish Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Fish Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Cod Liver Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Flax Seed Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Calcium
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Minerals
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Iron
                </MenuItem>
              </Link>
              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Vitamin B
                </MenuItem>
              </Link>
              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Vitamin D
                </MenuItem>
              </Link>
            </VStack>
            <VStack alignItems="flex-start">
              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Multivitamins
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Kids
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Women
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Sports
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Vegetarian
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Omega & Fish Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Fish Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Cod Liver Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Flax Seed Oil
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Calcium
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  bg="none"
                >
                  Minerals
                </MenuItem>
              </Link>

              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Iron
                </MenuItem>
              </Link>
              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Vitamin B
                </MenuItem>
              </Link>
              <Link>
                <MenuItem
                  fontSize="14px"
                  py={1}
                  _hover={{ color: "red" }}
                  fontWeight="bold"
                  bg="none"
                >
                  Vitamin D
                </MenuItem>
              </Link>
            </VStack>
          </HStack>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Fitness"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Fitness")}
          onMouseLeave={handleClose}
        >
          Fitness Supplements <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Fitness")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Whey Protein
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Fat Burners
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Protein Supplements
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Workout Essentials
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Mass Gainers
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Amino Acids
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              Arginine
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              BCAA
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              Glutathione
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              Glutamine
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              Creatine
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              Carnitine
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Stomach"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Stomach")}
          onMouseLeave={handleClose}
        >
          Stomach Care <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Stomach")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Constipation
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Acidity
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Pre and Probiotics
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Indigestion
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Diarrhoea
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Bloating
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Feminine"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Feminine")}
          onMouseLeave={handleClose}
        >
          Feminine Care <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Feminine")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Sanitary Pads
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Breast Pumps
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Hair Removal
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Intimate Wash & Wipes
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Toilet Sanitaries
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Menstrual Cup & Tampons
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              Tampons
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={400}
              bg="none"
            >
              Menstrual Cups
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Healthy"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Healthy")}
          onMouseLeave={handleClose}
        >
          Healthy Snacks <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Healthy")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Granola & Protein Bars
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Peanut Butter
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Honey
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Dry Fruits & Berries
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Cookies
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Drinks"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Drinks")}
          onMouseLeave={handleClose}
        >
          Nutritional Drinks <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Drinks")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Green Tea & Herbal Tea
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Adult Daily Nutrition
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Kids Nutrition (2-15 Yrs)
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Women Nutrition
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Apple Cider Vinegar
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Diabetes Nutrition
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Specialized Nutrition
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Green Coffee
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Diabetes"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Diabetes")}
          onMouseLeave={handleClose}
        >
          Diabetes <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Diabetes")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight={500}
              bg="none"
            >
              Blood Glucose Monitors
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Test Strips & Lancets
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Sugar Substitutes
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Diabetic Footwear
            </MenuItem>
          </Link>

          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Juices & Vinegars
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu isOpen={openMenu === "Boosters"} onClose={handleClose}>
        <MenuButton
          fontSize="14px"
          fontWeight={500}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{ color: "red" }}
          onMouseEnter={() => handleOpen("Boosters")}
          onMouseLeave={handleClose}
        >
          Immunity Boosters <ChevronDownIcon />
        </MenuButton>
        <MenuList
          zIndex={10}
          onMouseEnter={() => handleOpen("Boosters")}
          onMouseLeave={handleClose}
        >
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Chyawanparash
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Antioxidant Supplements
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Ayurvedic Supplements
            </MenuItem>
          </Link>
          <Link>
            <MenuItem
              fontSize="14px"
              py={1}
              _hover={{ color: "red" }}
              fontWeight="bold"
              bg="none"
            >
              Herbal Tea
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      {/* Add more buttons with similar structure */}
    </HStack>
  );
};

export default BottomNav;
