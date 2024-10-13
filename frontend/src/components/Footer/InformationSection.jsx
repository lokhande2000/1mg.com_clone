import { Box, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const InformationSection = () => {
  return (
    <Box
      p={8}
      bg="gray.50"
      shadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <VStack spacing={8} align="start">
        <Box>
          <Heading as="h2" size="md" mb={4}>
            Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and
            Healthcare Platform
          </Heading>
          <Text>
            Tata 1mg is India&apos;s leading digital healthcare platform. From
            doctor consultations on chat to online pharmacy and lab tests at
            home: we have it all covered for you. Having delivered over 25
            million orders in 1000+ cities till date, we are on a mission to
            bring &apos;care&apos; to &apos;health&apos; to give you a flawless
            healthcare experience.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Tata 1mg: Your Favourite Online Pharmacy!
          </Heading>
          <Text>
            Tata 1mg is India&apos;s leading online chemist with over 2 lakh
            medicines available at the best prices. We are your one-stop
            destination for other healthcare products as well, such as
            over-the-counter pharmaceuticals, healthcare devices, and homeopathy
            and ayurveda medicines.
          </Text>
          <Text mt={2}>
            With Tata 1mg, you can buy medicines online and get them delivered
            at your doorstep anywhere in India! But, is ordering medicines
            online a difficult process? Not at all! Simply search for the
            products you want to buy, add to cart and checkout. Now all you need
            to do is sit back as we get your order delivered to you.
          </Text>
          <Text mt={2}>
            In case you need assistance, just give us a call and we will help
            you complete your order.
          </Text>
          <Text mt={2}>
            And there is more! At Tata 1mg, you can buy health products and
            medicines online at best discounts.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h3" size="md" mb={2}>
            The Feathers in Our Cap
          </Heading>
          <Text>
            At Tata 1mg, our goal is to make healthcare understandable,
            accessible, and affordable in India. We set out on our journey in
            2015, and have come a long way since then. Along the way, we have
            been conferred with prestigious titles like BML Munjal Award for
            &apos;Business Excellence through Learning and Development&apos;,
            Best Online Pharmacy in India Award, and Top 50 venture in The Smart
            CEO-Startup50 India.
          </Text>
          <Text mt={2}>
            We have been selected as the only company from across the globe for
            SD#3 &apos;Health & Well Being for all&apos; by Unreasonable group,
            US State Department. In 2019 alone, we received three awards
            including the BMW Simply Unstoppable Award.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h3" size="md" mb={2}>
            The Services We Offer
          </Heading>
          <Text>
            Tata 1mg is India&apos;s leading digital healthcare platform, where
            you can buy medicines online with a discount. Buy medicine online in
            Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata,
            Chennai, Ahmedabad, Lucknow, and around a 1000 more cities. Besides
            delivering your online medicine order at your doorstep, we provide
            accurate, authoritative & trustworthy information on medicines and
            help people use their medicines effectively and safely.
          </Text>
          <Text mt={2}>
            We also facilitate lab tests at home. You can avail over 2,000 tests
            and get tested by 120+ top and verified labs at the best prices.
            Need to consult a doctor? On our platform, you can talk to over 20
            kinds of specialists in just a few clicks.
          </Text>
          <Text mt={2}>
            Customer centricity is the core of our values. Our team of highly
            trained and experienced doctors, phlebotomists, and pharmacists look
            into each order to give you a fulfilling experience.
          </Text>
          <Text mt={2}>
            We’ve made healthcare accessible to millions by giving them quality
            care at affordable prices. Customer centricity is the core of our
            values. Our team of highly trained and experienced doctors,
            phlebotomists, and pharmacists look into each order to give you a
            fulfilling experience.
          </Text>
          <Text mt={2}>
            Visit our online medical store now, and avail online medicine
            purchase at a discount. Stay Healthy!
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default InformationSection;
