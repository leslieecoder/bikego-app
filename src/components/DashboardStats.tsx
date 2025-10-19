import { SimpleGrid, Box, Text, HStack, VStack } from "@chakra-ui/react";
import type { Bike } from "../types/bike";

interface Props {
  bikes: Bike[];
}

export const DashboardStats = ({ bikes }: Props) => {
  const available = bikes.filter((b) => b.status === "available").length;
  const inUse = bikes.filter((b) => b.status === "in-use").length;
  const lowBattery = bikes.filter((b) => b.battery < 30).length;
  const avgBattery = bikes.reduce((a, b) => a + b.battery, 0) / bikes.length;

  return (
    <SimpleGrid columns={[1, 2, 4]} gap={6}>
      {/* Available Bikes */}
      <Box 
        bg="white" 
        p={6} 
        borderRadius="2xl" 
        shadow="sm"
        borderLeft="4px"
        borderColor="green.500"
        transition="all 0.3s"
        _hover={{ shadow: "md", transform: "translateY(-2px)" }}
      >
        <VStack align="start" gap={2}>
          <HStack>
            <Text fontSize="3xl">✅</Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">Available</Text>
          </HStack>
          <Text fontSize="4xl" fontWeight="bold" color="green.600">{available}</Text>
          <Text fontSize="xs" color="gray.500">Ready to ride</Text>
        </VStack>
      </Box>

      {/* In Use */}
      <Box 
        bg="white" 
        p={6} 
        borderRadius="2xl" 
        shadow="sm"
        borderLeft="4px"
        borderColor="blue.500"
        transition="all 0.3s"
        _hover={{ shadow: "md", transform: "translateY(-2px)" }}
      >
        <VStack align="start" gap={2}>
          <HStack>
            <Text fontSize="3xl">🚴</Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">In Use</Text>
          </HStack>
          <Text fontSize="4xl" fontWeight="bold" color="blue.600">{inUse}</Text>
          <Text fontSize="xs" color="gray.500">Currently riding</Text>
        </VStack>
      </Box>

      {/* Low Battery */}
      <Box 
        bg="white" 
        p={6} 
        borderRadius="2xl" 
        shadow="sm"
        borderLeft="4px"
        borderColor="red.500"
        transition="all 0.3s"
        _hover={{ shadow: "md", transform: "translateY(-2px)" }}
      >
        <VStack align="start" gap={2}>
          <HStack>
            <Text fontSize="3xl">🔋</Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">Low Battery</Text>
          </HStack>
          <Text fontSize="4xl" fontWeight="bold" color="red.600">{lowBattery}</Text>
          <Text fontSize="xs" color="gray.500">Needs charging</Text>
        </VStack>
      </Box>

      {/* Average Battery */}
      <Box 
        bg="white" 
        p={6} 
        borderRadius="2xl" 
        shadow="sm"
        borderLeft="4px"
        borderColor="purple.500"
        transition="all 0.3s"
        _hover={{ shadow: "md", transform: "translateY(-2px)" }}
      >
        <VStack align="start" gap={2}>
          <HStack>
            <Text fontSize="3xl">⚡</Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">Avg Battery</Text>
          </HStack>
          <Text fontSize="4xl" fontWeight="bold" color="purple.600">{avgBattery.toFixed(0)}%</Text>
          <Text fontSize="xs" color="gray.500">Fleet health</Text>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};
