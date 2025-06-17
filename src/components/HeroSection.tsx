import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { ArrowRight, Zap, Users, Trophy } from 'lucide-react';

const HeroSection: React.FC = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, brand.50, accent.50)',
    'linear(to-br, gray.900, gray.800)'
  );

  return (
    <Box
      bgGradient={bgGradient}
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={10}
          alignItems="center"
        >
          <Stack spacing={8}>
            <Stack spacing={4}>
              <HStack>
                <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                  We're Hiring!
                </Badge>
              </HStack>
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="bold"
                lineHeight={1.2}
                bgGradient="linear(to-r, brand.500, accent.500)"
                bgClip="text"
              >
                Join Our Elite Frontend Team
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                maxW="lg"
              >
                We're seeking passionate React developers who love crafting beautiful, 
                responsive web applications. Join us in building the future of web experiences 
                with cutting-edge technologies.
              </Text>
            </Stack>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
            >
              <Button
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
              >
                View Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                _hover={{
                  transform: 'translateY(-1px)',
                }}
              >
                Learn More
              </Button>
            </Stack>

            <HStack spacing={8} pt={4}>
              <HStack spacing={2}>
                <Box color="brand.500">
                  <Zap size={20} />
                </Box>
                <Text fontSize="sm" color="gray.600">
                  Fast-paced environment
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Box color="brand.500">
                  <Users size={20} />
                </Box>
                <Text fontSize="sm" color="gray.600">
                  Collaborative team
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Box color="brand.500">
                  <Trophy size={20} />
                </Box>
                <Text fontSize="sm" color="gray.600">
                  Award-winning projects
                </Text>
              </HStack>
            </HStack>
          </Stack>

          <Box
            position="relative"
            height={{ base: '300px', md: '400px' }}
            display={{ base: 'none', lg: 'block' }}
          >
            <Box
              position="absolute"
              top="10%"
              left="10%"
              w="80px"
              h="80px"
              bg="brand.400"
              borderRadius="20px"
              animation="float 3s ease-in-out infinite"
            />
            <Box
              position="absolute"
              top="30%"
              right="20%"
              w="60px"
              h="60px"
              bg="accent.400"
              borderRadius="15px"
              animation="float 3s ease-in-out infinite 1s"
            />
            <Box
              position="absolute"
              bottom="20%"
              left="30%"
              w="100px"
              h="100px"
              bg="green.400"
              borderRadius="25px"
              animation="float 3s ease-in-out infinite 2s"
            />
          </Box>
        </SimpleGrid>
      </Container>
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;