import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+375(25)535-71-91">+375(25)535-71-91</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:h.shkliaryk@gmail.com">
            h.shkliaryk@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href="/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </SocialIconsContainer> 
    </FooterWrapper>
  );
};

export default Footer;
