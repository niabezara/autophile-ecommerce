import styled from "styled-components";

export default function ShopList() {
  return (
    <Conatiner>
      <Section>
        <Top>
          <p>CART(0)</p>
          <button>Remove All</button>
        </Top>
        <Middle>Your Cart is empty</Middle>
        <div>
          <p>Total</p>
          <p>price</p>
        </div>
        <button>Checkout</button>
      </Section>
    </Conatiner>
  );
}
const Conatiner = styled.div`
  width: 100%;
  max-width: 23.5625rem;
  height: 30.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  margin-left: auto;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Section = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 15rem;
  overflow: auto;
`;
