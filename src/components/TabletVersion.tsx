import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/modal/ShopModal";
import ShopList from "./ShopList";
import { UseShoppingCart } from "../context/CartContext";
import Categories from "./Categories";

export default function TabletVersion() {
  const { openCart, openModal, setOpenModal, isNavbarOpen, toggleNavbar } =
    UseShoppingCart();

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
          <Categories />
        </NavList>
        <Link to="/">
          <Logo src="/assets/shared/desktop/logo.svg" alt="" />
        </Link>
      </nav>
      <button
        onClick={openCart}
        style={{ background: "transparent", border: "none" }}
      >
        <img
          src="/assets/shared/desktop/icon-cart.svg"
          alt=""
          style={{ width: "20px", height: "23px" }}
        />
      </button>

      <Modal open={openModal} setOpenModal={setOpenModal}>
        <ShopList />
      </Modal>
    </Head>
  );
}

const Head = styled.header`
  background-color: black;
  display: flex;
  align-items: center;
  position: relative;
  padding: 3.9rem;
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

const Logo = styled.img`
  margin-left: 4.2rem;
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
  top: 100px;
  width: 100%;
  padding: 2rem 2.4rem 2rem 2.4rem;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  background: white;
`;
