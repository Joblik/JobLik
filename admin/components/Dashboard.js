import dynamic from "next/dynamic";
import { Box, Flex, Heading, StatGroup, Show, Hide } from "@chakra-ui/react";
import MiniCalendar from "./MiniCalendar";
import StatItem from "./StatItem";
import { progressData } from "../config";
import ProgressTable from "./DashboardTable";

const LineChart = dynamic(() => import("../components/LineChart"), {
  ssr: false,
});
const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false,
});

const DoubleColumnChart = dynamic(
  () => import("../components/DoubleColumnChart"),
  {
    ssr: false,
  }
);

function Dashboard() {
  return (
    <>
      <StatGroup w="100%" gap="1rem" pt="1.7rem">
        <StatItem
          label="Users communications"
          number="+50 msg/day "
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

      <Box marginTop="3rem" shadow="md" p="1rem">
        <Heading
          mb="1rem"
          fontSize={["2xl", "3xl"]}
          color="bcPrimary.sea"
          fontWeight="medium"
        >
          JobLik Visitors
        </Heading>
        <DoubleColumnChart />
      </Box>
      <Flex w="100%" mt="1rem" flexDir={["column", "column", "row"]} gap="3rem">
        <Box w="100%" shadow="md" p="1rem">
          <Heading
            mb="1rem"
            fontSize={["2xl", "3xl"]}
            color="bcPrimary.sea"
            fontWeight="medium"
          >
           JobLik Production
          </Heading>
          <LineChart />
        </Box>
        <Box w="100%" shadow="md" p="1rem">
          <Heading
            mb={["1rem", "3rem", "5rem"]}
            fontSize={["2xl", "3xl"]}
            color="bcPrimary.sea"
            fontWeight="medium"
          >
            Customers
          </Heading>
          <PieChart />
        </Box>
      </Flex>
      <Flex w="100%" mt="1rem" flexDir={["column", "column", "row"]} gap="3rem">
        <Show above="md">
          <Box shadow="md" p="1rem">
            <Heading
              mb="1rem"
              fontSize={["2xl", "3xl"]}
              color="bcPrimary.sea"
              fontWeight="medium"
            >
              Progress
            </Heading>
            <ProgressTable progressData={progressData} />
          </Box>
        </Show>
        <Hide above="md">
          <Box shadow="md" p="1rem">
            <Heading
              mb="1rem"
              fontSize={["2xl", "3xl"]}
              color="bcPrimary.sea"
              fontWeight="medium"
            >
              Progress
            </Heading>
            <ProgressTable
              size="sm"
              w={["100%", "50%"]}
              progressData={progressData}
            />
          </Box>
        </Hide>
        <MiniCalendar />
      </Flex>
    </>
  );
}

export default Dashboard;
