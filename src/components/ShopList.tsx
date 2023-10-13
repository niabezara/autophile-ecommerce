import styled from "styled-components";
import { UseShoppingCart } from "../context/CartContext";
import { useContext } from "react";
import ProductData from "../data/data.json";
import Product from "../routes/Product";
import { CartItem } from "./CartItem";

export default function ShopList() {
  const { items, cartQuantity, removeAllFromCart } = UseShoppingCart();

  return (
    <Container>
      <Section>
        <Top>
          <p>cart ({cartQuantity})</p>
          <button onClick={() => removeAllFromCart()}>Remove all</button>
        </Top>
        {items.length === 0 ? (
          <Middle>Your Cart is empty</Middle>
        ) : (
          items.map((item) => <CartItem key={item.id} {...item} />)
        )}
        <PriceDiv>
          <p style={{ opacity: "0.5", fontSize: "15px", fontWeight: "500" }}>
            Total
          </p>
          <p
            style={{
              textTransform: "uppercase",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            $
            {items
              .reduce((total, item) => {
                const product = ProductData.find(
                  (product) => product.id === item.id
                );
                const itemPrice = product?.price || 0;
                const itemQuantity = item.quantity;
                return total + itemPrice * itemQuantity;
              }, 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </PriceDiv>
        <Checkout>checkout</Checkout>
      </Section>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  max-height: 45.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  margin-left: auto;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;
`;
const Section = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    text-decoration-line: underline;
    opacity: 0.5;
  }
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  height: 15rem;
  overflow: auto;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.286px;
`;
const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Checkout = styled.button`
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #d87d4a;
  border: none;
  padding: 1.5rem;
`;
