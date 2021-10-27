import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I primarly use React (usually in MERN stack) to build various products, from simple SPA's to complex E-Commerce services.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Strong knowledge of JavaScript, CSS preprocessors and responsive web design patterns. <br />
            Experience with
            React, TypeScript, NextJS and Python.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with building complex RESTful applications using NodeJS, MongoDB, Express, .NET Core MVC.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma, AdobeXD, Photoshop.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
