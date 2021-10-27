import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "GitHub Projects" },
  { number: 1, text: "year as a freelance developer" },
  { number: 2, text: "years of React development" },
  { number: 1, text: "years of experience as Sofware Engineer" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText> 
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
