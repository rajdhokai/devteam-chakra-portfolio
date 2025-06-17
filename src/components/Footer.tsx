import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  Link,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { Code } from 'lucide-react';

const Footer: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bg} borderTop="1px" borderColor={borderColor}>
      <Container maxW="7xl" py={8}>
        <Stack spacing={6}>
          <HStack justify="space-between" wrap="wrap" spacing={4}>
            <HStack spacing={3}>
              <Box
                p={2}
                bg="brand.500"
                rounded="lg"
                color="white"
              >
                <Code size={20} />
              </Box>
              <Text fontSize="lg" fontWeight="bold" color="brand.500">
                DevTeam
              </Text>
            </HStack>

            <HStack spacing={6} wrap="wrap">
              <Link href="#skills" fontSize="sm" _hover={{ color: 'brand.500' }}>
                Skills
              </Link>
              <Link href="#projects" fontSize="sm" _hover={{ color: 'brand.500' }}>
                Projects
              </Link>
              <Link href="#team" fontSize="sm" _hover={{ color: 'brand.500' }}>
                Team
              </Link>
              <Link href="#contact" fontSize="sm" _hover={{ color: 'brand.500' }}>
                Contact
              </Link>
            </HStack>
          </HStack>

          <Divider />

          <HStack justify="space-between" wrap="wrap" spacing={4}>
            <Text fontSize="sm" color="gray.600">
              © 2025 DevTeam. All rights reserved.
            </Text>
            <HStack spacing={4} wrap="wrap">
              <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
                Terms of Service
              </Link>
              <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
                Careers
              </Link>
            </HStack>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;