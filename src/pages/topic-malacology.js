import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { graphql } from "gatsby";
import Databases from "../components/homepage/Databases";
import Backarrow from "../components/atoms/Backarrow";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import { malacologyTextEn, malacologyTextCz } from "../content/topics";
import Img from "gatsby-image";

const Crypto = ({ data }) => {
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
            <Backarrow to="" />
            <h2>
              {int === "en" ? en.malacologyHeading : cz.malacologyHeading}
            </h2>
            <div>{int === "en" ? malacologyTextEn : malacologyTextCz}</div>
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
