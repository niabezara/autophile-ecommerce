import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/modal/ShopModal";
import ShopList from "./ShopList";
import { UseShoppingCart } from "../context/CartContext";
import Categories from "./Categories";

export default function MobileVersion({
  isNavbarOpen,
  toggleNavbar,
}: {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}) {
  const { openCart, openModal, setOpenModal } = UseShoppingCart();
  return (
    <Head open={isNavbarOpen}>
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
      </nav>
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="" />
      </Link>
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

const Head = styled.header<{ open: boolean }>`
  border-bottom: 1px solid
    hsla(240, 55.55555555555569%, 98.23529411764707%, 0.17);
  padding: 2.4rem;
  position: ${({ open }) => (open ? "fixed" : "unset")};
  align-items: center;
  width: 100%;
  justify-content: space-between;
  display: flex;
  z-index: 10;
  background: black;
`;

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  height: 100%;
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
