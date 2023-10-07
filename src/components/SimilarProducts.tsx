import { Link } from "react-router-dom";
import { ProductInterface } from "../types/types";
import styled from "styled-components";

export default function SimilarProducts({ products, currentProductId }: any) {
  const similarProducts = products
    .filter((product: ProductInterface) => product.id !== currentProductId)
    .slice(0, 3);

  return (
    <div>
      <h2>you may also like</h2>
      <Card>
        {similarProducts.map(
          (similarProduct: ProductInterface, index: number) => (
            <Wrap key={similarProduct.id}>
              <img
                style={{ width: "100%" }}
                src={similarProduct.others[index].image.mobile}
                alt=""
              />
              <h3>{similarProduct.name}</h3>
              <Link to="">
                <button className="GlobalButton">See Product</button>
              </Link>
            </Wrap>
          )
        )}
      </Card>
    </div>
  );
}

const Card = styled.div`
  width: 100%;
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
`;
