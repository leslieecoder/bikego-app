import { Box, Stack, Heading, Text, HStack, Grid, GridItem } from "@chakra-ui/react";
import { MapView } from "./MapView";
import { DashboardStats } from "./DashboardStats";
import { BikeList } from "./BikeList";
import { useBikeData } from "../hooks/useBikeData";

export const Dashboard = () => {
  const bikes = useBikeData();

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" borderBottom="1px" borderColor="gray.200" px={8} py={6}>
        <HStack justify="space-between">
          <Box>
            <Heading size="xl" fontWeight="bold"  color="blue.600">BIKEGO</Heading>
            <Text color="gray.600" mt={1}>Real-time bike tracking and monitoring</Text>
          </Box>
          <Box textAlign="right">
            <Text fontSize="sm" color="gray.500">Total Bikes</Text>
            <Text fontSize="3xl" fontWeight="bold" color="blue.600">{bikes.length}</Text>
          </Box>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box p={8}>
        <Stack gap={8}>
          <DashboardStats bikes={bikes} />
          
          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
            <GridItem>
              <MapView bikes={bikes} />
            </GridItem>
            <GridItem>
              <BikeList bikes={bikes} />
            </GridItem>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};
