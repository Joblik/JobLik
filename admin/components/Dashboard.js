import dynamic from "next/dynamic";
import { Box, Flex, Heading, StatGroup, Show, Hide } from "@chakra-ui/react";
import MiniCalendar from "./MiniCalendar";
import StatItem from "./StatItem";



const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false,
});


function Dashboard() {
  return (
    <>
      <StatGroup w="100%" gap="1rem" pt="1.7rem">
        <StatItem
          label="Number of users"
          number="+7 "
          type="increase"
          percentage="23.36%"
        />
        <StatItem
          label="Contributing"
          number="40%"
          type="increase"
          percentage="9.05%"
        />
        <StatItem
          label="Number of Posts"
          number="8"
          type="increase"
          percentage="16.84%"
        />
      </StatGroup>

      
      <Flex w="100%" mt="1rem" flexDir={["column", "column", "row"]} gap="3rem">
        
        <Box w="100%" shadow="md" p="1rem">
          <Heading
            mb={["1rem", "3rem", "5rem"]}
            fontSize={["2xl", "3xl"]}
            color="bcPrimary.sea"
            fontWeight="medium" 
          >
            Type of Customers
          </Heading>
          <PieChart />
        </Box>
          <MiniCalendar />
      </Flex>
    </>
  );
}

export default Dashboard;
