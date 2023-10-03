import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <footer>
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
      <section>
        <p>Copyright 2021. All Rights Reserved</p>
        <img src="/assets/shared/icon-faacebook.svg" alt="" />
        <img src="/assets/shared/icon-twitter.svg" alt="" />
        <img src="/assets/shared/icon-instagram.svg" alt="" />
      </section>
    </footer>
  );
}

const NavList = styled.ul``;
