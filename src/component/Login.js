import React from "react";
import styled from "styled-components";
import Im from "../images/login.jpg";
import LogoOne from "../images/cta-logo-one.svg";
import LogoTwo from "../images/cta-logo-two.png"

export const Login = () => {
  return (
    <Container>
      <Content>
        <Cta>
          <CtaLogoOne src={LogoOne} />
          <SignUp>  GET ALL THERE  </SignUp>
          <Description>  Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</Description>
            <CtaLogoTwo src={LogoTwo}/>
        </Cta>

        <BgImg src={Im} />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImg = styled.img`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  /* background-image:url("../images/login.jpg"); */
`;

const  Cta=styled.div`
 max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;

`
const CtaLogoOne=styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;

`
const SignUp=styled.div`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
letter-spacing: 1.5px;
margin-bottom: 12px;
width: 100%;
font-size: 18px;
padding: 16.5px 0;
cursor: pointer;
border: 1px solid transparent;
border-radius: 4px;
&:hover{
    background-color: #0483ee;
}
`
const Description=styled.div`
color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`
const CtaLogoTwo =styled.img`


max-width:600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;



`