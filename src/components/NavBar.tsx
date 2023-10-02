import styled from "styled-components";

export default function NavBar() {
  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <Nav>
        <img src="/assets/shared/desktop/logo.svg" alt="" />
        <ul>
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
        <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
      </Nav>
    </div>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;

  padding: 3.5rem 16.5rem;
  border-bottom: 1px solid white;
  ul {
    display: flex;
    gap: 3.4rem;
    color: white;
    list-style-type: none;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2px;
  }
`;
