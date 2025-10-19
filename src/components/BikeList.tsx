import { Box, VStack, HStack, Text, Badge } from "@chakra-ui/react";
import type { Bike } from "../types/bike";

interface Props {
  bikes: Bike[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "available":
      return "green";
    case "in-use":
      return "blue";
    case "low-battery":
      return "red";
    default:
      return "gray";
  }
};

const getBatteryColor = (battery: number) => {
  if (battery > 60) return "green.500";
  if (battery > 30) return "yellow.500";
  return "red.500";
};

export const BikeList = ({ bikes }: Props) => {
  return (
    <Box bg="white" p={6} borderRadius="2xl" shadow="sm" maxH="600px" overflowY="auto">
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={4}>
        🚲 Bike Fleet
      </Text>
      <VStack gap={3} align="stretch">
        {bikes.map((bike) => (
          <Box
            key={bike.id}
            p={4}
            borderRadius="lg"
            border="1px"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{ borderColor: "blue.400", shadow: "sm" }}
          >
            <HStack justify="space-between" mb={2}>
              <Text fontWeight="bold" fontSize="lg">{bike.name}</Text>
              <Badge colorScheme={getStatusColor(bike.status)}>
                {bike.status}
              </Badge>
            </HStack>
            
            <HStack gap={4}>
              <Box flex="1">
                <Text fontSize="xs" color="gray.500">Battery</Text>
                <HStack>
                  <Box
                    w="full"
                    h="6px"
                    bg="gray.200"
                    borderRadius="full"
                    overflow="hidden"
                  >
                    <Box
                      h="full"
                      w={`${bike.battery}%`}
                      bg={getBatteryColor(bike.battery)}
                      transition="all 0.3s"
                    />
                  </Box>
                  <Text fontSize="sm" fontWeight="bold" minW="45px">
                    {bike.battery.toFixed(0)}%
                  </Text>
                </HStack>
              </Box>
            </HStack>
            
            <HStack mt={2} fontSize="xs" color="gray.500">
              <Text>📍 {bike.lat.toFixed(4)}, {bike.lng.toFixed(4)}</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
