import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Badge,
  Button,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured shopping platform with React, TypeScript, and Chakra UI. Features include product catalog, shopping cart, and checkout flow.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Chakra UI', 'Stripe'],
    type: 'Web Application',
    status: 'Live',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Modern admin dashboard with data visualization, real-time updates, and responsive design. Built with advanced React patterns.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Chart.js', 'WebSocket', 'REST API'],
    type: 'Dashboard',
    status: 'In Development',
  },
  {
    title: 'Mobile-First App',
    description: 'Progressive web app with offline capabilities, push notifications, and seamless mobile experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['PWA', 'Service Workers', 'Responsive', 'Performance'],
    type: 'Mobile App',
    status: 'Live',
  },
  {
    title: 'Component Library',
    description: 'Reusable component library with Storybook documentation, automated testing, and comprehensive design system.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Storybook', 'Design System', 'NPM Package', 'Testing'],
    type: 'Library',
    status: 'Open Source',
  },
];

const ProjectsSection: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box id="projects" py={20}>
      <Container maxW="7xl">
        <Stack spacing={12}>
          <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
            >
              Projects You'll Work On
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Join us in building cutting-edge web applications that serve millions of users. 
              These are examples of the exciting projects waiting for you.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects.map((project, index) => (
              <Box
                key={project.title}
                bg={cardBg}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="sm"
                _hover={{
                  boxShadow: 'xl',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s"
                animation={`fadeInUp 0.6s ease-out ${index * 0.2}s both`}
              >
                <Box position="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    h="200px"
                    w="100%"
                    objectFit="cover"
                  />
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme={project.status === 'Live' ? 'green' : 'blue'}
                    borderRadius="full"
                    px={3}
                    py={1}
                  >
                    {project.status}
                  </Badge>
                </Box>

                <Box p={6}>
                  <Stack spacing={4}>
                    <Stack spacing={2}>
                      <HStack justify="space-between" align="start">
                        <Heading size="md" fontWeight="semibold">
                          {project.title}
                        </Heading>
                        <Badge variant="subtle" colorScheme="brand">
                          {project.type}
                        </Badge>
                      </HStack>
                      <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                        {project.description}
                      </Text>
                    </Stack>

                    <HStack spacing={2} flexWrap="wrap">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          colorScheme="gray"
                          fontSize="xs"
                          borderRadius="full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </HStack>

                    <HStack spacing={3}>
                      <Button
                        size="sm"
                        variant="solid"
                        leftIcon={<ExternalLink size={16} />}
                        flex={1}
                      >
                        View Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        leftIcon={<Github size={16} />}
                        flex={1}
                      >
                        Source Code
                      </Button>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
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

export default ProjectsSection;