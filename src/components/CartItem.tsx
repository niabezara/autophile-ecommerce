import { UseShoppingCart } from "../context/CartContext";
import ProductData from "../data/data.json";
import styled from "styled-components";
type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { incraseCartQuantity, decreaseCartQuantity } = UseShoppingCart();

  const item = ProductData.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Container>
      <div style={{ flex: " 1 1 30%" }}>
        <img src={item.image.mobile} alt="" />
      </div>
      <div style={{ flex: " 1 1 45%" }}>
        <h1>{item.name}</h1>
        <p style={{ opacity: "0.5", fontSize: "14px" }}>
          ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>

      <div className="addingitems" style={{ flex: " 1 1 30%" }}>
        <button
          className="incrementdicrementbtn"
          onClick={() => decreaseCartQuantity(item.id)}
        >
          -
        </button>
        <button style={{ border: "none", fontWeight: "700" }}>
          {quantity}
        </button>
        <button
          className="incrementdicrementbtn"
          onClick={() => incraseCartQuantity(item.id)}
        >
          +
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  img {
    max-width: 100%;
  }
  .addingitems {
    background-color: #f1f1f1;
    width: 7.5rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.9375rem;
    cursor: pointer;
    font-weight: 700;
    .incrementdicrementbtn {
      display: flex;
      border: none;
      opacity: 0.25;
      cursor: pointer;
      width: 1rem;
      height: 1.125rem;
    }
  }
`;
// const Wrap = styled.div`
//   align-items: center;
//   display: flex;
//
//   justify-content: space-around;
// `;

export default CartItem;
