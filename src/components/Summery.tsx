import styled from "styled-components";
import { UseShoppingCart } from "../context/CartContext";
import ProductData from "../data/data.json";
import { FinalProducts } from "./FinalProducts";

export default function Summery() {
  const { items } = UseShoppingCart();

  return (
    <Card>
      <h1>Summary</h1>
      <div>
        {items.map((item) => (
          <FinalProducts key={item.id} id={item.id} quantity={item.quantity} />
        ))}
      </div>
      <Calc>
        <article>
          <p className="title">TOTAL</p>
          <p>
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
        </article>
        <article>
          <p className="title">SHIPPING</p>
          <p>$50</p>
        </article>
        <article>
          <p className="title">VAT (INCLUDED)</p>
          <p>
            $
            {(
              items.reduce((totalVAT, item) => {
                const product = ProductData.find(
                  (product) => product.id === item.id
                );
                const itemPrice = product?.price || 0;
                const itemQuantity = item.quantity;
                const itemVAT = (itemPrice * itemQuantity * 0.2).toFixed(2);
                return totalVAT + parseFloat(itemVAT);
              }, 0) || 0
            )
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </article>
        <article>
          <p className="title">GRAND TOTAL</p>
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
        </article>
      </Calc>
    </Card>
  );
}
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* padding: 2.4rem; */
  h1 {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
`;
const Calc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  article {
    display: flex;
    justify-content: space-between;
    p {
      color: #000;
      font-size: 18px;
      font-weight: 700;
    }
    .grandtotal {
      color: #d87d4a;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .title {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
  }
`;
