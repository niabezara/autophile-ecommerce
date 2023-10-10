import { Link } from "react-router-dom";
import { ProductInterface } from "../types/types";
import styled from "styled-components";
import ProductData from "../data/data.json";

export default function SimilarProducts() {
  const others = ProductData.map((product) => product.others)
    .flat()
    .slice(0, 3);

  return (
    <section>
      <Text>you may also like</Text>
      <Card>
        {others.map((product, index) => (
          <Wrap key={index}>
            <img
              key={index}
              src={
                window.innerWidth >= 900
                  ? product.image.desktop
                  : window.innerWidth >= 500
                  ? product.image.tablet
                  : product.image.mobile
              }
              alt=""
            />

            <h3>{product.name}</h3>
            <Link to="">
              <button className="GlobalButton">See Product</button>
            </Link>
          </Wrap>
        ))}
      </Card>
    </section>
  );
}

const Text = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;
const Card = styled.div`
  width: 100%;
  @media screen and (min-width: 500px) {
    display: grid;
    column-gap: 0.6875rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 900px) {
    column-gap: 3rem;
  }
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  gap: 2rem;
  align-items: center;
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;
