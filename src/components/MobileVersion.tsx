import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MobileVersion({
  isNavbarOpen,
  toggleNavbar,
}: {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}) {
  return (
    <Head>
      <nav>
        <img
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt=""
          style={{ width: "16px", height: "16px" }}
          onClick={toggleNavbar}
        />
        <NavList open={isNavbarOpen}>
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
      <img src="/assets/shared/desktop/logo.svg" alt="" />
      <img
        src="/assets/shared/desktop/icon-cart.svg"
        alt=""
        style={{ width: "20px", height: "23px" }}
      />
    </Head>
  );
}

const Head = styled.div`
  background-color: black;
  /* z-index: 9999; */
  display: flex;
  align-items: center;
  position: relative;
  padding: 2.4rem;
  justify-content: space-between;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0.2;
    height: 1px;
    background-color: white;
  }
`;

const NavList = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  visibility: ${({ open }) => (open ? "" : "hidden")};
  list-style: none;
  align-items: center;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  right: 0;
  top: 69px;
  width: 100%;
  padding: 2rem 2.4rem 2rem 2.4rem;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  background: white;
`;
