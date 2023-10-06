import { useNavigate, useParams } from "react-router-dom";
import ProductData from "../data/data.json";
import styled from "styled-components";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const productId: number | undefined = id ? parseInt(id, 10) : undefined;

  const product = ProductData.find((item) => item.id === productId);
  const navigate = useNavigate();
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <SubContainer>
        <button className="Back" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <Wrapper>
          <Card>
            <Image src={product.categoryImage.mobile} alt="single-product" />
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

  @media screen and (min-width: 900px) {
    padding: 9.7rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.4rem;
  .Back {
    border: none;
    background: transparent;
    color: #000;
    opacity: 0.5;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
  }
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

  @media screen and (min-width: 900px) {
    margin-top: unset;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  margin-top: 2rem;
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
