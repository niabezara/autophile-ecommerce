import ProductData from "../data/data.json";
import styled from "styled-components";
type CartItemProps = {
  id: number;
  quantity: number;
};

export function FinalProducts({ id, quantity }: CartItemProps) {
  const item = ProductData.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <Section>
        <div>
          <img src={item.image.mobile} alt="" />
        </div>
        <div style={{ flex: " 1 1 45%" }}>
          <h1>{item.name}</h1>
          <p style={{ opacity: "0.5", fontSize: "14px" }}>
            ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>

        <div>
          <p style={{ fontSize: "15px", fontWeight: "700", opacity: "0.5" }}>
            X{quantity}
          </p>
        </div>
      </Section>
    </div>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  img {
    border-radius: 0.5rem;
    width: 6rem;
    height: 6rem;
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

export default FinalProducts;
