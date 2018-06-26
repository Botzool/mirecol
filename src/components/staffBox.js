import React, {Component} from "react";
import styled from "styled-components";
import researchgate from "../pages/images/social-researchgate.png";
import email from "../pages/images/social-email.png";
import is from "../pages/images/social-is.png";

class StaffBox extends Component {
    render() {
      const {img, personInfo} = this.props
      const research = personInfo.research.map(i => {
            return <li key={i}>{i}</li>;
          })
        return (
        <Box>
            <BoxPart style={{flex: 1}}>
                <img src={img} alt={personInfo.name} height='265px'/>
            </BoxPart>
            <BoxPart style={{flex: 6, minWidth: 260}}>
                <Name>{personInfo.name}
                 <div style={{fontSize: '0.7em', color: '#778899'}}>{personInfo.position}</div>
                </Name>
                <div>
                    <P>
                        <i className="fa fa-envelope fa-lg" style={{color: 'black', marginRight: 15}}></i>
                        <StyledLink href={`mailto:${personInfo.email}` || '#'}>
                            <span>{personInfo.email}</span>
                        </StyledLink>
                    </P>
                    <P>
                        <i className="fa fa-phone fa-lg" style={{marginRight: 15}}></i>
                        {personInfo.phoneNumber}
                    </P>
                    <P>
                        <a href={personInfo.researchgate || '#'}><img src={researchgate} alt='researchgate'  height='40px'/></a>
                        <a href={personInfo.is || '#'}><img src={is} alt='is' height='40px'/></a>
                    </P>
                </div>
            </BoxPart>
        </Box>
);
}}
export default StaffBox;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    padding: 0;
  }
`;

const Name = styled.h3`
    color: ${props => props.theme.main};
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 0.08em solid rgb(229, 229, 229);
 `

const BoxPart = styled.div`
    padding: 0 1em;
 `

const P = styled.p`
    margin: 10px 0px;
 `

 const StyledLink = styled.a`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;