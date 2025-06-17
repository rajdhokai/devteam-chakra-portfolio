import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const toast = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    experience: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: 'Application Submitted!',
      description: 'Thank you for your interest. We\'ll be in touch soon.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      position: '',
      experience: '',
      message: '',
    });
  };

  return (
    <Box id="contact" py={20}>
      <Container maxW="7xl">
        <Stack spacing={12}>
          <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
            >
              Ready to Join Our Team?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              We'd love to hear from you! Send us your application and let's discuss 
              how you can contribute to our mission of building exceptional web experiences.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="start">
            {/* Contact Form */}
            <Box
              bg={cardBg}
              p={8}
              borderRadius="2xl"
              boxShadow="sm"
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={6}>
                  <Heading size="lg" mb={2}>
                    Apply Now
                  </Heading>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        focusBorderColor="brand.500"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        focusBorderColor="brand.500"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Position</FormLabel>
                      <Select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="Select position"
                        focusBorderColor="brand.500"
                      >
                        <option value="frontend-junior">Junior Frontend Developer</option>
                        <option value="frontend-mid">Mid-level Frontend Developer</option>
                        <option value="frontend-senior">Senior Frontend Developer</option>
                        <option value="frontend-lead">Frontend Team Lead</option>
                        <option value="fullstack">Full Stack Developer</option>
                      </Select>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Experience Level</FormLabel>
                      <Select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Years of experience"
                        focusBorderColor="brand.500"
                      >
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8+">8+ years</option>
                      </Select>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl>
                    <FormLabel>Tell us about yourself</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your experience, projects you're proud of, and why you'd like to join our team..."
                      rows={5}
                      focusBorderColor="brand.500"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    size="lg"
                    leftIcon={<Send size={20} />}
                    isDisabled={!formData.name || !formData.email || !formData.position}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                  >
                    Submit Application
                  </Button>
                </Stack>
              </form>
            </Box>

            {/* Contact Information */}
            <Stack spacing={8}>
              <Box
                bg={cardBg}
                p={8}
                borderRadius="2xl"
                boxShadow="sm"
              >
                <Stack spacing={6}>
                  <Heading size="lg">
                    Get in Touch
                  </Heading>
                  
                  <VStack spacing={4} align="start">
                    <HStack spacing={4}>
                      <Box
                        p={3}
                        bg="brand.100"
                        borderRadius="lg"
                        color="brand.500"
                      >
                        <Icon as={Mail} w={5} h={5} />
                      </Box>
                      <Stack spacing={0}>
                        <Text fontWeight="medium">Email</Text>
                        <Text fontSize="sm" color="gray.600">
                          careers@devteam.com
                        </Text>
                      </Stack>
                    </HStack>

                    <HStack spacing={4}>
                      <Box
                        p={3}
                        bg="brand.100"
                        borderRadius="lg"
                        color="brand.500"
                      >
                        <Icon as={Phone} w={5} h={5} />
                      </Box>
                      <Stack spacing={0}>
                        <Text fontWeight="medium">Phone</Text>
                        <Text fontSize="sm" color="gray.600">
                          +1 (555) 123-4567
                        </Text>
                      </Stack>
                    </HStack>

                    <HStack spacing={4}>
                      <Box
                        p={3}
                        bg="brand.100"
                        borderRadius="lg"
                        color="brand.500"
                      >
                        <Icon as={MapPin} w={5} h={5} />
                      </Box>
                      <Stack spacing={0}>
                        <Text fontWeight="medium">Location</Text>
                        <Text fontSize="sm" color="gray.600">
                          San Francisco, CA (Remote-friendly)
                        </Text>
                      </Stack>
                    </HStack>
                  </VStack>
                </Stack>
              </Box>

              <Box
                bg={cardBg}
                p={8}
                borderRadius="2xl"
                boxShadow="sm"
              >
                <Stack spacing={4}>
                  <Heading size="md">
                    Follow Us
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    Stay updated with our latest projects and team updates
                  </Text>
                  <HStack spacing={4}>
                    <Box
                      as="button"
                      p={3}
                      bg="brand.100"
                      borderRadius="lg"
                      color="brand.500"
                      _hover={{
                        bg: 'brand.200',
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.2s"
                    >
                      <Icon as={Linkedin} w={5} h={5} />
                    </Box>
                    <Box
                      as="button"
                      p={3}
                      bg="brand.100"
                      borderRadius="lg"
                      color="brand.500"
                      _hover={{
                        bg: 'brand.200',
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.2s"
                    >
                      <Icon as={Github} w={5} h={5} />
                    </Box>
                    <Box
                      as="button"
                      p={3}
                      bg="brand.100"
                      borderRadius="lg"
                      color="brand.500"
                      _hover={{
                        bg: 'brand.200',
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.2s"
                    >
                      <Icon as={Twitter} w={5} h={5} />
                    </Box>
                  </HStack>
                </Stack>
              </Box>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;