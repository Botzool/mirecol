import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { graphql } from "gatsby";
import Databases from "../components/homepage/Databases";
import Backarrow from "../components/atoms/Backarrow";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import { cryptogamologyTextEn, cryptogamologyTextCz, results } from "../content/topics";
import Img from "gatsby-image";

const Crypto = ({ data }) => {
  const getResults = results => {
    return results.map((i, index) => <li key={index}>{i}</li>);
  };
  const windowGlobal = typeof window !== "undefined" && window;
  const imgs = data.images.edges.map((i, index) => (
    <Img key={index} fluid={i.node.childImageSharp.fluid} style={{marginBottom: 5}}/>
  ));
  const smallWidthImgs = imgs.slice(0,6)
  const finalImgs = windowGlobal.innerWidth > 1600 ? smallWidthImgs : imgs
  return (
    <Consumer>
      {({ int }) => (
        <ContainerWrapper>
          <div style={{ flex: 3, paddingRight: "1em" }}>
            <Backarrow to="" />
            <h2>{int === "en" ? en.cryptogamology : cz.cryptogamology}</h2>
            <div>{int === "en" ? cryptogamologyTextEn : cryptogamologyTextCz}</div>
            <h2>{int === "en" ? en.mainResults : cz.mainResults}</h2>
            <div>{getResults(results.cryptogamologyResults)}</div>
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
  location: PropTypes.object
};

export const query = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "research-kryptogamologie" }
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
