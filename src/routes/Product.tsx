import { useParams } from "react-router-dom";
import ProductData from "../data/data.json";
import styled from "styled-components";

export default function Product() {
  const { id, type } = useParams<{ id: string; type: string }>();
  const productId: number | undefined = id ? parseInt(id, 10) : undefined;

  const product = ProductData.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <p>Go Back</p>
      <SubContainer>
        <Wrapper>
          <Card>
            <Image src={product.categoryImage.mobile} alt="" />
          </Card>
          <div className="Info">
            {product.new && <p className="News">NEW PRODUCT</p>}
            <h3 className="Title">{product.name}</h3>
            <p className="ProductDescription">{product.description}</p>
            <p>${product.price}</p>
            <div>
              <input type="number" name="" id="" />
              <button className="GlobalButton">ADD TO CART</button>
            </div>
          </div>
        </Wrapper>
      </SubContainer>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 2.4rem;

  @media screen and (min-width: 500px) {
    padding: 3.9rem;
  }
  @media screen and (min-width: 900px) {
    max-width: 100.5rem;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  border-radius: 8px;
  background-color: #f1f1f1;
  margin-top: 4rem;
  @media screen and (min-width: 900px) {
    margin-top: unset;
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  .Info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.2rem;
    align-items: center;
  }

  @media screen and (min-width: 900px) {
    gap: 12.5rem;
    .Info {
      align-items: flex-start;
      gap: 1.6rem;
      .Title {
        text-align: left;
        margin: unset;
      }
      .ProductDescription {
        text-align: left;
      }
    }
  }
`;
