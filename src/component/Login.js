import React from "react";
import styled from "styled-components";
import Im from "../images/login.jpg"

export const Login = () => {
  return (
    <Container>
      <Content>
        <BgImg  src={Im}/>
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
