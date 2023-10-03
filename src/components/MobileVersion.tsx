import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MobileVersion() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    console.log("nia");
  };
  return (
    <Head>
      <img
        src="/assets/shared/tablet/icon-hamburger.svg"
        alt=""
        style={{ width: "16px", height: "16px" }}
        onClick={toggleNavbar}
      />
      <nav>
        <NavList open={isNavbarOpen}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="">HEADPHONES</Link>
          </li>
          <li>
            <Link to="">SPEAKERS</Link>
          </li>
          <li>
            <Link to="">EARPHONES</Link>
          </li>
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
  display: flex;
  align-items: center;
  padding: 2.4rem;
  justify-content: space-between;
`;

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
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
