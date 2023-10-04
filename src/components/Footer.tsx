import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <div className="subfoo">
        <Wrap>
          <img src="/assets/shared/desktop/logo.svg" alt="" />
          <Nav>
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
          </Nav>
        </Wrap>
        <WrapDesc>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="Icons">
            <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
            <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
            <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
          </div>
        </WrapDesc>
        <Section>
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="Icons">
            <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
            <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
            <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
          </div>
        </Section>
      </div>
    </Foot>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  img {
    width: 14.3rem;
  }
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WrapDesc = styled.div`
  margin: 4.8rem 0 4.8rem 0;

  .Icons {
    display: none;
  }
  @media screen and (min-width: 900px) {
    .Icons {
      display: flex;
      gap: 1rem;
      cursor: pointer;
    }
    p {
      max-width: 50%;
    }
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
`;
const Foot = styled.footer`
  background-color: #101010;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.2rem 2.4rem 3.8rem;
  position: relative;

  p {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    opacity: 0.5;
    text-align: center;
    @media screen and (min-width: 700px) {
      align-items: flex-start;
      text-align: start;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 30%;
    height: 4px;
    background: #d87d4a;
  }
  @media screen and (min-width: 700px) {
    /* display: unset; */
    align-items: flex-start;
    text-align: start;
    padding: 3.9rem;
  }
  @media screen and (min-width: 900px) {
    .subfoo {
      max-width: 100.5rem;
      margin: 0 auto;
    }
  }
`;

const Nav = styled.nav``;

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
    &:active,
    &:focus {
      color: #d87d4a;
    }
  }
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`;

const Section = styled.section`
  p {
    margin-bottom: 4.8rem;
  }
  .Icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
    .Icons:active svg,
    .Icons:focus svg {
      fill: #d87d4a;
    }
  }
  @media screen and (min-width: 700px) {
    display: flex;

    justify-content: space-between;
    p {
      margin-bottom: 0;
    }
    .Icons {
      justify-content: unset;
      cursor: pointer;
      &:active,
      &:focus {
        color: #d87d4a;
      }
    }
  }
  @media screen and (min-width: 900px) {
    .Icons {
      display: none;
    }
  }
`;
