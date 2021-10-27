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
          <LinkItem href="tel:+375255357191">+375 (25) 535-71-91</LinkItem>
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
          <Slogan>Innovation is my passion</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/georgyshkliaryk" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/heorhi-shkliaryk-64b927206/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/h.shkliaryk/" target="_blank">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      </SocialIconsContainer> 
    </FooterWrapper>
  );
};

export default Footer;
