import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DesktopVersion() {
  return (
    <Head>
      <Logo src="/assets/shared/desktop/logo.svg" alt="" />
      <Nav>
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>

          <Link to="">
            <li>HEADPHONES</li>
          </Link>
          <Link to="">
            <li>SPEAKERS</li>
          </Link>
          <Link to="">
            <li>EARPHONES</li>
          </Link>
        </ul>
      </Nav>
      <Logo src="/assets/shared/desktop/icon-cart.svg" alt="" />
    </Head>
  );
}
const Head = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  padding: 3.5rem 16.5rem;
  position: relative;
  justify-content: space-between;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 75%;
    opacity: 0.2;
    height: 1px;
    background-color: white;
  }
`;
const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    gap: 3.4rem;
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2px;
    a {
      text-decoration: none;
    }
    li {
      color: white;
      cursor: pointer;

      &:active,
      &:focus {
        color: #d87d4a;
      }
    }
  }
`;

const Logo = styled.img`
  cursor: pointer;
`;
