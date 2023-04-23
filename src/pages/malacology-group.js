import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { graphql } from "gatsby";
import Databases from "../components/homepage/Databases";
import Backarrow from "../components/atoms/Backarrow";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import { results } from "../content/topics";
import Img from "gatsby-image";
import { UlStyled } from "../components/atoms/Ul";
import { Link } from "gatsby";
import styled from "styled-components";

const Crypto = ({ data }) => {
  const getResults = (results) => {
    return results.map((i, index) => <li key={index}>{i}</li>);
  };
  const windowGlobal = typeof window !== "undefined" && window;
  const imgs = data.images.edges.map((i, index) => (
    <Img
      key={index}
      fluid={i.node.childImageSharp.fluid}
      style={{ marginBottom: 5 }}
    />
  ));
  const smallWidthImgs = imgs.slice(0, 6);
  const finalImgs = windowGlobal.innerWidth > 1600 ? smallWidthImgs : imgs;
  return (
    <Consumer>
      {({ int }) => (
        <ContainerWrapper>
          <div style={{ flex: 3, paddingRight: "1em" }}>
            <Backarrow to="topic-malacology" />
            <h2>{int === "en" ? en.groupmembers : cz.groupmembers}</h2>
            <div>
              <LinkStyled to="/people/" state={{ person: "horsak" }}>
                Michal Horsák{" "}
              </LinkStyled>
              <a href="mailto:horsak@sci.muni.cz">horsak@sci.muni.cz</a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "nekola" }}>
                Jeffrey Nekola{" "}
              </LinkStyled>
              <a href="mailto:nekola@sci.muni.cz">nekola@sci.muni.cz</a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "horsakova" }}>
                Veronika Horsáková{" "}
              </LinkStyled>
              <a href="mailto:veronika.horsakova@seznam.cz">
                veronika.horsakova@seznam.cz
              </a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "novakova" }}>
                Markéta Nováková{" "}
              </LinkStyled>
              <a href="mailto:novakova.marke@gmail.com">
                novakova.marke@gmail.com
              </a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "liznarova" }}>
                Eva Líznarová{" "}
              </LinkStyled>
              <a href="mailto:liznarovaeva@centrum.cz">
                liznarovaeva@centrum.cz
              </a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "saito" }}>
                Takumi Saito{" "}
              </LinkStyled>
              <a href="mailto:saito.zef@gmail.com">saito.zef@gmail.com</a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "coufal" }}>
                Radovan Coufal{" "}
              </LinkStyled>
              <a href="mailto:radovan.coufal39@seznam.cz">
                radovan.coufal39@seznam.cz
              </a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "nemec" }}>
                Tomáš Němec{" "}
              </LinkStyled>
              <a href="mailto:422930@mail.muni.cz">422930@mail.muni.cz</a>
            </div>
            <div>
              {" "}
              <LinkStyled to="/people/" state={{ person: "slachtova" }}>
                Erika Šlachtová{" "}
              </LinkStyled>
              <a href="mailto:er.slachtova@gmail.com">er.slachtova@gmail.com</a>
            </div>
            <h2>{int === "en" ? en.mainResults : cz.mainResults}</h2>
            <UlStyled>{getResults(results.malacologyResults)}</UlStyled>
          </div>
          <div style={{ flex: 1 }}>{finalImgs}</div>
          <Databases text={int === "en" ? en : cz} style={{ flex: 1 }} />
        </ContainerWrapper>
      )}
    </Consumer>
  );
};

export default Crypto;

Crypto.propTypes = {
  location: PropTypes.object,
};

export const query = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "research-malakologie" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.grey};
  text-decoration: none;
`;
