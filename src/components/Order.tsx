import FinalProducts from "./FinalProducts";
import { UseShoppingCart } from "../context/CartContext";
import ProductData from "../data/data.json";
import styled from "styled-components";
interface OrderProps {
  onClose: () => void;
}
export default function Order({ onClose }: OrderProps) {
  const { items } = UseShoppingCart();
  return (
    <Container>
      <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
      <h1>THANK YOU FOR YOUR ORDER</h1>
      <p style={{ fontSize: "15px", opacity: "0.5" }}>
        You will receive an email confirmation shortly.
      </p>
      <ProductItemDiv>
        <ProductItem>
          {items.slice(0, 1).map((item) => (
            <FinalProducts
              key={item.id}
              id={item.id}
              quantity={item.quantity}
            />
          ))}
          <hr
            style={{
              opacity: "0.08",
              background: "#000",
              height: "1px",
              width: "90%",
            }}
          />
          {items.length > 1 && (
            <p
              style={{ padding: "0 1.2rem ", opacity: "0.5", fontSize: "12px" }}
            >{`And ${items.length - 1} other item(s)`}</p>
          )}
        </ProductItem>
        <Price>
          <p className="titlegrand">GRAND TOTAL</p>
          <p className="grandtotal">
            $
            {(
              items.reduce((total, item) => {
                const product = ProductData.find(
                  (product) => product.id === item.id
                );
                const itemPrice = product?.price || 0;
                const itemQuantity = item.quantity;
                return total + itemPrice * itemQuantity;
              }, 0) + 50
            )
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </Price>
      </ProductItemDiv>

      {onClose && (
        <button
          className="GlobalButton"
          style={{ width: "100%" }}
          onClick={onClose}
        >
          BACK TO HOME
        </button>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 1.6rem;
  border-radius: 8px;
  padding: 3.2rem;
  max-width: 54rem;
  background-color: #f2f2f2;
  img {
    width: 5rem;
    height: 5rem;
    display: block;
    max-width: 100%;
  }
`;
const Price = styled.div`
  border-radius: 0px 0px 8px 8px;
  background: #000;
  padding: 2.4rem;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 3.2rem;
  .titlegrand {
    opacity: 0.5;
  }
  @media screen and (min-width: 500px) {
    border-radius: 0px 8px 8px 0px;
    margin-bottom: unset;
  }
`;
const ProductItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b272730;
  padding: 2.4rem;
  border-radius: 8px 8px 0 0;
  @media screen and (min-width: 500px) {
    display: flex;
    width: 100%;
  }
  @media screen and (min-width: 900px) {
    border-radius: 8px 0 0 8px;
    width: 100%;
  }
`;
const ProductItemDiv = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    width: 100%;
  }
`;
