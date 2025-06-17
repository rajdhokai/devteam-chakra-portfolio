import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Avatar,
  HStack,
  VStack,
  useColorModeValue,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { 
  Coffee, 
  Heart, 
  Users, 
  Zap, 
  Award, 
  BookOpen,
  Globe,
  Target
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Frontend Lead',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: 'React Architecture',
  },
  {
    name: 'Mike Rodriguez',
    role: 'Senior Developer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: 'Performance Optimization',
  },
  {
    name: 'Emily Johnson',
    role: 'UI/UX Engineer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: 'Design Systems',
  },
  {
    name: 'David Kim',
    role: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: 'API Integration',
  },
];

const benefits = [
  {
    icon: Coffee,
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs',
  },
  {
    icon: BookOpen,
    title: 'Learning Budget',
    description: '$2000 annual learning and conference budget',
  },
  {
    icon: Award,
    title: 'Growth Path',
    description: 'Clear career progression and mentorship',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on products used by millions worldwide',
  },
  {
    icon: Target,
    title: 'Equity Package',
    description: 'Competitive salary with equity participation',
  },
];

const TeamSection: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const benefitsBg = useColorModeValue('brand.50', 'gray.900');

  return (
    <Box id="team" py={20} bg="gray.50">
      <Container maxW="7xl">
        <Stack spacing={16}>
          {/* Team Members */}
          <Stack spacing={12}>
            <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
              >
                Meet Your Future Team
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Join a talented team of passionate developers who love creating 
                exceptional user experiences and pushing the boundaries of web technology.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
              {teamMembers.map((member, index) => (
                <Box
                  key={member.name}
                  bg={cardBg}
                  p={6}
                  borderRadius="2xl"
                  textAlign="center"
                  boxShadow="sm"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s"
                  animation={`slideInUp 0.6s ease-out ${index * 0.1}s both`}
                >
                  <VStack spacing={4}>
                    <Avatar
                      size="xl"
                      src={member.avatar}
                      name={member.name}
                      border="3px solid"
                      borderColor="brand.100"
                    />
                    <Stack spacing={1} textAlign="center">
                      <Heading size="sm" fontWeight="semibold">
                        {member.name}
                      </Heading>
                      <Text fontSize="sm" color="brand.500" fontWeight="medium">
                        {member.role}
                      </Text>
                      <Badge variant="subtle" colorScheme="brand" borderRadius="full">
                        {member.expertise}
                      </Badge>
                    </Stack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>

          {/* Benefits */}
          <Box bg={benefitsBg} p={8} borderRadius="3xl">
            <Stack spacing={8}>
              <Stack spacing={4} textAlign="center">
                <HStack justify="center" spacing={2}>
                  <Icon as={Users} w={6} h={6} color="brand.500" />
                  <Heading size="lg" fontWeight="bold">
                    Why Join Our Team?
                  </Heading>
                </HStack>
                <Text color="gray.600" maxW="2xl" mx="auto">
                  We believe in creating an environment where developers thrive, 
                  learn, and build amazing things together.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {benefits.map((benefit, index) => (
                  <HStack
                    key={benefit.title}
                    spacing={4}
                    p={2}
                    animation={`fadeIn 0.6s ease-out ${index * 0.1}s both`}
                  >
                    <Box
                      p={3}
                      bg="brand.100"
                      borderRadius="xl"
                      color="brand.500"
                      flexShrink={0}
                    >
                      <Icon as={benefit.icon} w={5} h={5} />
                    </Box>
                    <Stack spacing={1}>
                      <Text fontWeight="semibold" fontSize="sm">
                        {benefit.title}
                      </Text>
                      <Text fontSize="xs" color="gray.600" lineHeight="1.4">
                        {benefit.description}
                      </Text>
                    </Stack>
                  </HStack>
                ))}
              </SimpleGrid>
            </Stack>
          </Box>
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
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default TeamSection;