import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/modal/ShopModal";
import ShopList from "./ShopList";
import { Dispatch, SetStateAction } from "react";

export default function DesktopVersion({
  setOpenModal,
  openModal,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Head>
      <div className="Subheader">
        <Link to="/">
          <Logo src="/assets/shared/desktop/logo.svg" alt="" />
        </Link>
        <Nav>
          <ul>
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
          </ul>
        </Nav>
        <button
          onClick={() => setOpenModal((prevOpenModal) => !prevOpenModal)}
          style={{ background: "transparent", border: "none" }}
        >
          <Logo src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
        <Modal open={openModal}>
          <ShopList />
        </Modal>
      </div>
    </Head>
  );
}
const Head = styled.div`
  background-color: black;
  align-items: center;
  padding: 3.9rem;
  position: relative;
  width: 100%;
  justify-content: space-between;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 90%;
    opacity: 0.2;
    height: 1px;
    background-color: white;
  }
  .Subheader {
    display: flex;
    justify-content: space-between;
    max-width: 100.5rem;
    margin: 0 auto;
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
