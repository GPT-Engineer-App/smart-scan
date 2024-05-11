import { Container, VStack, Button, Image, Text, IconButton, Input, Box, SimpleGrid, Tag, TagLabel, TagCloseButton, CircularProgress } from "@chakra-ui/react";
import { FaCamera, FaUpload, FaSave, FaEdit, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          InvoiceScanner App
        </Text>
        <Box textAlign="center">
          <Text fontSize="lg">Capture or Upload Your Invoice</Text>
          <SimpleGrid columns={2} spacing={10} mt={4}>
            <IconButton icon={<FaCamera />} aria-label="Capture Invoice" isRound={true} size="lg" colorScheme="teal" />
            <IconButton icon={<FaUpload />} aria-label="Upload Invoice" isRound={true} size="lg" colorScheme="teal" />
          </SimpleGrid>
        </Box>
        <Box>
          <Text fontSize="lg">OCR Processing</Text>
          <CircularProgress isIndeterminate color="green.300" />
        </Box>
        <Box>
          <Text fontSize="lg">Edit Extracted Data</Text>
          <VStack spacing={4}>
            <Input placeholder="Vendor Name" />
            <Input placeholder="Total Amount" />
            <Input placeholder="Date" />
            <Button leftIcon={<FaEdit />} colorScheme="blue" variant="solid">
              Edit
            </Button>
          </VStack>
        </Box>
        <Box>
          <Text fontSize="lg">Categorize & Tag</Text>
          <VStack spacing={4}>
            <Input placeholder="Add a tag" />
            <Tag size="lg" borderRadius="full" variant="solid" colorScheme="green">
              <TagLabel>Project A</TagLabel>
              <TagCloseButton />
            </Tag>
            <Button leftIcon={<FaSave />} colorScheme="purple" variant="solid">
              Save
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
