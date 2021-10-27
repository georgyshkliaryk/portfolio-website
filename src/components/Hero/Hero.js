import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        Freelance Web Developer based in Minsk, Belarus. <br/>I use React as main framework, but picking up new tool is not a problem.
        I've built complex full-stack web applications using MERN stack. <br/> I have hands on experience in making websites to the custom order, from planning the UI design to deploying the product to the hosting. <br/> Always trying to learn something new.
        
      </SectionText>
      <a href="mailto:h.shkliaryk@gmail.com">
        <Button>Contact Me</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
