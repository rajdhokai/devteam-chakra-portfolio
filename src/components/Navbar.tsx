import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Container,
  Text,
} from '@chakra-ui/react';
import { Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={3} alignItems="center">
            <Box
              p={2}
              bg="brand.500"
              rounded="lg"
              color="white"
            >
              <Code size={20} />
            </Box>
            <Text fontSize="xl" fontWeight="bold" color="brand.500">
              DevTeam
            </Text>
          </HStack>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Link href="#skills" _hover={{ color: 'brand.500' }}>
              Skills
            </Link>
            <Link href="#projects" _hover={{ color: 'brand.500' }}>
              Projects
            </Link>
            <Link href="#team" _hover={{ color: 'brand.500' }}>
              Team
            </Link>
            <Link href="#contact" _hover={{ color: 'brand.500' }}>
              Contact
            </Link>
          </HStack>

          <Button
            size="sm"
            variant="solid"
          >
            Apply Now
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;