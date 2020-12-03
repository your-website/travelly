import React, { useEffect } from "react";
// Style
import styled from "styled-components";
// Components
import Hero from "../components/Hero";
import Location from "../components/Location";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// Animate
import { motion } from "framer-motion";
const MainPage = () => {
  return (
    <Page>
      <Main>
        <HeroStyle>
          <Hero />
        </HeroStyle>
        <LocationStyle>
          <Location />
        </LocationStyle>
        <BenefitsStyle>
          <Benefits />
        </BenefitsStyle>
        <ContactStyle>
          <Contact />
        </ContactStyle>
      </Main>
      <StyleFooter>
        <Footer />
      </StyleFooter>
    </Page>
  );
};

export default MainPage;

const Main = styled.main`
  overflow: hidden;
`;

const Page = styled.div`
  height: 90vh;
  width: 100%;
`;
const StyleFooter = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0;
  z-index: 6;
  width: 100%;
`;
const LocationStyle = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff;
`;
const BenefitsStyle = styled(motion.div)`
  position: absolute;
  top: 0%;
  left: 100%;
  width: 100%;
  z-index: 3;
`;
const HeroStyle = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  z-index: 1;
`;
const ContactStyle = styled(motion.div)`
  position: absolute;
  top: 0%;
  right: 100%;
  width: 100%;
  z-index: 4;
`;
