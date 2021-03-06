import React from "react";
import styled from "styled-components";
import Logo1 from "../images/logo.svg";
import Home from "../images/home-icon.svg";
import Search from "../images/search-icon.svg";
import Watch from "../images/watchlist-icon.svg";
import Original from "../images/original-icon.svg";
import Movie from "../images/movie-icon.svg";
import Series from "../images/series-icon.svg";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { provider } from "../firebase";

export const Header = () => {
  const handleAuthi = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  return (
    <Nav>
      <Logo>
        <img src={Logo1} />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={Home} alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src={Search} alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={Watch} alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={Original} alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={Movie} alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={Series} alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuthi}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      cursor: pointer;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;
