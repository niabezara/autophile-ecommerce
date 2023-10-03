import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DesktopVersion() {
  return (
    <Head>
      <Logo src="/assets/shared/desktop/logo.svg" alt="" />
      <Nav>
        <ul>
          <li>
            <Link className="Link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="Link" to="">
              HEADPHONES
            </Link>
          </li>
          <li>
            <Link className="Link" to="">
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link className="Link" to="">
              EARPHONES
            </Link>
          </li>
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
    li {
      .Link {
        color: white;
        text-decoration: none;
        cursor: pointer;
        &:active,
        &:focus {
          color: #d87d4a;
        }
      }
    }
  }
`;

const Logo = styled.img`
  cursor: pointer;
`;
