import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </Layout>
    </ChakraProvider>
  );
}

export default App;