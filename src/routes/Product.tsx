import { useNavigate, useParams } from "react-router-dom";
import ProductData from "../data/data.json";
import styled from "styled-components";

import SimilarProducts from "../components/SimilarProducts";
import Categories from "../components/Categories";
import Info from "../components/Info";
import { UseShoppingCart } from "../context/CartContext";

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const lowerCaseSlug = slug ? slug.toLowerCase() : "";
  const product = ProductData.find((item) => item.slug === lowerCaseSlug);
  const navigate = useNavigate();
  const Price = product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // useContext
  const {
    incraseCartQuantity,
    decreaseCartQuantity,
    addToCart,
    getItemQuantity,
  } = UseShoppingCart();

  const quantity = product?.id ? getItemQuantity(product.id) : 0;

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
            <Image
              src={
                window.innerWidth >= 900
                  ? product.image.desktop
                  : window.innerWidth >= 500
                  ? product.image.tablet
                  : product.image.mobile
              }
              alt="single-product"
            />
          </Card>
          <div className="Info">
            {product.new && <p className="News">NEW PRODUCT</p>}
            <h3 className="Title">{product.name}</h3>
            <p className="ProductDescription">{product.description}</p>
            <p className="price">${Price}</p>
            <Btns>
              <div className="addingitems">
                <button
                  className="incrementdicrementbtn"
                  onClick={() => decreaseCartQuantity(product.id)}
                >
                  -
                </button>
                <button style={{ border: "none", fontWeight: "700" }}>
                  {quantity}
                </button>
                <button
                  className="incrementdicrementbtn"
                  onClick={() => incraseCartQuantity(product.id)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="GlobalButton"
              >
                ADD TO CART
              </button>
            </Btns>
          </div>
        </Wrapper>
        <section>
          <div>
            <h2 style={{ fontWeight: "700", fontSize: "24px" }}>FEATURES</h2>
            <p
              style={{ fontSize: "15px", opacity: "0.5", marginTop: "2.4rem" }}
            >
              {product.features}
            </p>
          </div>
        </section>
        <section>
          <BoxSection>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "24px",
                textTransform: "uppercase",
                marginBottom: "2.4rem",
              }}
            >
              in the box
            </h2>
            <div>
              {product.includes.map((include, index) => (
                <Article key={index}>
                  <p className="quantity">{include.quantity}X</p>
                  <p className="item">{include.item}</p>
                </Article>
              ))}
            </div>
          </BoxSection>
        </section>
        <Gallery>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <img
              src={
                window.innerWidth >= 900
                  ? product.gallery.first.desktop
                  : window.innerWidth >= 500
                  ? product.gallery.first.tablet
                  : product.gallery.first.mobile
              }
              alt=""
            />
            <img src={product.gallery.second.mobile} alt="" />
          </div>
          <img src={product.gallery.third.mobile} alt="" />
        </Gallery>
        <SimilarProducts />
        <Categories />
        <Info />
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
    /* padding: 9.7rem; */
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8rem;
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
  @media screen and (min-width: 500px) {
    width: 22.5625rem;
    height: 48rem;
  }
  @media screen and (min-width: 900px) {
    width: 45rem;
    height: 48rem;
  }
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
    align-items: flex-start;
    .ProductDescription {
      text-align: left;
    }
    .price {
      font-size: 18px;
      font-weight: 700;
      padding: 1.5rem 0 1.9375rem;
    }
  }
  @media screen and (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    gap: 6rem;
    .Info {
      align-items: flex-start;
      .Title {
        text-align: left;
      }
    }
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
const Btns = styled.div`
  display: flex;
  gap: 1.5rem;
  .addingitems {
    background-color: #f1f1f1;
    width: 7.5rem;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.9375rem;
    font-weight: 700;
    .incrementdicrementbtn {
      display: flex;
      border: none;
      opacity: 0.25;
      width: 1rem;
      height: 1.125rem;
    }
  }
`;

const Article = styled.article`
  display: flex;
  gap: 2.4rem;
  .quantity {
    color: #d87d4a;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
  }
  .item {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
  }
`;
const Gallery = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  img {
    width: 100%;
    height: 100%;
    margin-bottom: 1.25rem;
    border-radius: 0.5rem;
  }
  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1.45fr;
    column-gap: 1.875rem;
    place-items: center;
  }
`;

const BoxSection = styled.div`
  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    gap: 10.1875rem;
  }
`;
