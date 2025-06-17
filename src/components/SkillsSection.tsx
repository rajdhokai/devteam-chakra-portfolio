import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  Icon,
  Progress,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  Code, 
  Smartphone, 
  Layers, 
  Zap, 
  GitBranch, 
  Palette,
  Database,
  TestTube
} from 'lucide-react';

const skills = [
  {
    name: 'React & TypeScript',
    icon: Code,
    level: 95,
    description: 'Advanced component architecture and modern React patterns',
  },
  {
    name: 'Responsive Design',
    icon: Smartphone,
    level: 90,
    description: 'Mobile-first approach with CSS Grid and Flexbox mastery',
  },
  {
    name: 'Chakra UI',
    icon: Palette,
    level: 85,
    description: 'Component library expertise for rapid development',
  },
  {
    name: 'State Management',
    icon: Database,
    level: 88,
    description: 'Redux, Zustand, and Context API implementation',
  },
  {
    name: 'Performance',
    icon: Zap,
    level: 92,
    description: 'Code splitting, lazy loading, and optimization techniques',
  },
  {
    name: 'Testing',
    icon: TestTube,
    level: 80,
    description: 'Unit testing with Jest and React Testing Library',
  },
  {
    name: 'Version Control',
    icon: GitBranch,
    level: 93,
    description: 'Git workflows and collaborative development practices',
  },
  {
    name: 'Architecture',
    icon: Layers,
    level: 87,
    description: 'Scalable component design and project structure',
  },
];

const SkillsSection: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box id="skills" py={20} bg="gray.50">
      <Container maxW="7xl">
        <Stack spacing={12}>
          <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
            >
              Skills We're Looking For
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Join our team if you have expertise in these modern frontend technologies 
              and practices. We value continuous learning and growth.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {skills.map((skill, index) => (
              <Box
                key={skill.name}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                boxShadow="sm"
                _hover={{
                  boxShadow: 'md',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s"
                animation={`slideInUp 0.6s ease-out ${index * 0.1}s both`}
              >
                <Stack spacing={4}>
                  <HStack spacing={3}>
                    <Box
                      p={2}
                      bg="brand.100"
                      borderRadius="lg"
                      color="brand.500"
                    >
                      <Icon as={skill.icon} w={5} h={5} />
                    </Box>
                  </HStack>
                  
                  <Stack spacing={2}>
                    <Heading size="sm" fontWeight="semibold">
                      {skill.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.600" lineHeight="1.5">
                      {skill.description}
                    </Text>
                  </Stack>

                  <Stack spacing={2}>
                    <HStack justify="space-between">
                      <Text fontSize="xs" color="gray.500">
                        Required Level
                      </Text>
                      <Text fontSize="xs" color="brand.500" fontWeight="medium">
                        {skill.level}%
                      </Text>
                    </HStack>
                    <Progress
                      value={skill.level}
                      colorScheme="brand"
                      borderRadius="full"
                      size="sm"
                    />
                  </Stack>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      <style>
        {`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default SkillsSection;