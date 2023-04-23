import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import snail from "../../images/snail.png";
import plant from "../../images/plant.png";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
const Databases = ({ text, isHome }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allImageSharp(
          filter: { fluid: { src: { regex: "/topic/" } } }
          sort: { fields: [fluid___originalName], order: ASC }
        ) {
          edges {
            node {
              id
              fluid(maxWidth: 3200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const imgs = data.images.edges.map((i) => i.node.fluid);
      const researches = [
        <TopicLink to="topic-mires" key="topic-mires">
          <Img fluid={imgs[2]} />
          {text.mireEcology}
        </TopicLink>,
        <TopicLink to="topic-paleo" key="topic-paleo">
          <Img fluid={imgs[3]} />
          {text.palaeoEcology}
        </TopicLink>,
        <TopicLink to="topic-relict" key="topic-relict">
          <Img fluid={imgs[4]} />
          {text.relictEcosystems}
        </TopicLink>,
        <TopicLink to="topic-crypto" key="topic-crypto">
          <Img fluid={imgs[0]} />
          {text.cryptogamology}
        </TopicLink>,
        <TopicLink to="topic-malacology" key="topic-malacology">
          <Img fluid={imgs[1]} />
          {text.malacology}
        </TopicLink>,
      ];
      let researchesBox = researches.map((i, index) => (
        <TopicLinkWrapper key={index}>{i}</TopicLinkWrapper>
      ));

      return (
        <RightPanel>
          {isHome && <strong>{text.mainTopics}</strong>}
          {isHome && <Research>{researchesBox}</Research>}
          <DatabasesBox>
            <p>
              <strong>{text.databases}</strong>
            </p>
            <p>
              <img src={plant} alt="plant" height="30em" />
              <StyledLink href="http://www.sci.muni.cz/botany/mirecol/paleo/en/">
                {text.plantDatabase}
              </StyledLink>
            </p>
            <p>
              <img src={snail} alt="snail" height="30em" />
              <StyledLink href="https://arcg.is/1yqyGH">
                {text.paleoDatabase}
              </StyledLink>
            </p>
            <p>
              <img src={plant} alt="plant" height="30em" />
              <StyledLink href="http://www.givd.info/ID/EU-00-022">
                {text.vegetationDatabase}
              </StyledLink>
            </p>
            <p>
              <img src={snail} alt="snail" height="30em" />
              <StyledLink href="https://arcg.is/1yqyGH">
                {text.malacoDatabase}
              </StyledLink>
            </p>
          </DatabasesBox>
        </RightPanel>
      );
    }}
  />
);

export default Databases;

Databases.propTypes = {
  text: PropTypes.object,
  isHome: PropTypes.bool,
};

const Research = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: center;
  flex-wrap: wrap;
  div {
    width: 230px;
    max-width: 350px;
  }
  @media (min-width: ${(props) => props.theme.mediumDevice}) {
    justify-content: start;
    div {
      width: 180px;
      min-width: 180px;
      max-width: 180px;
    }
  }
`;

const DatabasesBox = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  p {
    margin: 5px 0;
  }
`;

const RightPanel = styled.div`
  flex: ${(props) => (props.isHome ? 3 : 1)};
  border-left: 1px solid ${(props) => props.theme.grey};
  line-height: 1em;
  padding-left: 2em;
  margin-left: 1em;
  @media (max-width: ${(props) => props.theme.largeDevice}) {
    margin: 0;
    border: 0;
    padding: 0;
    border-bottom: 1px solid ${(props) => props.theme.grey};
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${(props) => props.theme.secondary};
  }
`;

const TopicLink = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.black};
  text-decoration: none;
  div {
    min-width: 140px;
  }
  @media (max-width: ${(props) => props.theme.mediumDevice}) {
    div {
      width: 100%;
      min-width: 200px;
    }
  }
  &:hover {
    text-decoration: ${(props) => (props.navigation ? "underline" : "none")};
    color: ${(props) =>
      props.navigation ? props.theme.grey : props.theme.main};
  }
  &:focus {
    color: ${(props) =>
      props.navigation ? props.theme.secondary : props.theme.grey};
  }
`;

const TopicLinkWrapper = styled.div`
  flex: 1;
  margin: 5px;
`;
