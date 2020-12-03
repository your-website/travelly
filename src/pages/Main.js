import React from "react";
// Style
import styled from "styled-components";
// Components
import Travel from "../components/Travel";
import Location from "../components/Location";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// Animate
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  animLocation,
  animBenefits,
  animContact,
  staggerPage,
} from "../animations";
// Redux
import { useSelector } from "react-redux";

const MainPage = () => {
  // Controls for animate
  const { benefits, contact, location } = useSelector((state) => state.page);

  const controlsLocation = useAnimation();
  if (location) {
    controlsLocation.start("show");
  } else {
    controlsLocation.start("hidden");
  }

  const controlsBenefits = useAnimation();
  if (benefits) {
    controlsBenefits.start("show");
  } else {
    controlsBenefits.start("hidden");
  }

  const controlsContact = useAnimation();
  if (contact) {
    controlsContact.start("show");
  } else {
    controlsContact.start("hidden");
  }

  return (
    <Page>
      <AnimatePresence>
        <Main>
          <TravelStyle>
            <Travel />
          </TravelStyle>

          <LocationStyle
            variants={animLocation(0.7)}
            animate={controlsLocation}
            initial="hidden"
          >
            <Location />
          </LocationStyle>

          <BenefitsStyle
            variants={animBenefits(0.7)}
            animate={controlsBenefits}
            initial="hidden"
          >
            <Benefits />
          </BenefitsStyle>

          <ContactStyle
            variants={animContact(0.7)}
            animate={controlsContact}
            initial="hidden"
          >
            <Contact />
          </ContactStyle>
        </Main>
      </AnimatePresence>
      <StyleFooter>
        <Footer />
      </StyleFooter>
    </Page>
  );
};

export default MainPage;

const Main = styled(motion.main)`
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
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff;
`;
const BenefitsStyle = styled(motion.div)`
  position: absolute;
  top: 0%;
  width: 100%;
  z-index: 3;
`;
const TravelStyle = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  z-index: 1;
`;
const ContactStyle = styled(motion.div)`
  position: absolute;
  top: 0%;
  width: 100%;
  z-index: 4;
`;
