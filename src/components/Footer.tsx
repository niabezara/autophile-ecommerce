import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <img src="/assets/shared/desktop/logo.svg" alt="" />
      <nav>
        <NavList>
          <Link to="/">
            <li>HOME</li>
          </Link>

          <Link to="/Headphones">
            <li>HEADPHONES</li>
          </Link>
          <Link to="/Speakers">
            <li>SPEAKERS</li>
          </Link>
          <Link to="/Earphones">
            <li>EARPHONES</li>
          </Link>
        </NavList>
      </nav>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p>Copyright 2021. All Rights Reserved</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
        <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
        <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  padding: 5.2rem 2.4rem 3.8rem;
  position: relative;
  p {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    opacity: 0.5;
    text-align: center;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 30%;
    height: 4px;
    background: #d87d4a;
  }
`;

const NavList = styled.ul`
  text-align: center;
  list-style: none;
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  gap: 1.6rem;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;
