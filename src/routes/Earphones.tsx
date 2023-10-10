import styled from "styled-components";
import Products from "../data/data.json";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import Info from "../components/Info";

export default function Earphones() {
  return (
    <Container>
      <div className="heading">
        <h1>EARPHONES</h1>
      </div>
      <SubContainer>
        {Products.map(
          (item, index) =>
            item.category === "earphones" && (
              <Wrapper key={item.id} index={index}>
                <Card>
                  <Image
                    src={
                      window.innerWidth >= 900
                        ? item.categoryImage.desktop
                        : window.innerWidth >= 500
                        ? item.categoryImage.tablet
                        : item.categoryImage.mobile
                    }
                    alt=""
                  />
                </Card>
                <div className="Info">
                  {item.new && <p className="News">NEW PRODUCT</p>}
                  <h3 className="Title">{item.name}</h3>
                  <p className="ProductDescription">{item.description}</p>
                  <Link to={`/product/Earphones/1`}>
                    <button className="GlobalButton">See Product</button>
                  </Link>
                </div>
              </Wrapper>
            )
        )}
      </SubContainer>
      <Categories />
      <Info />
    </Container>
  );
}
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

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;

  .heading {
    background-color: black;
    padding: 3.2rem;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media screen and (min-width: 900px) {
      padding: 9.7rem;
    }
  }
`;

const Card = styled.div`
  border-radius: 8px;
  background-color: #f1f1f1;
  margin-top: 4rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div<{ index: number }>`
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
    flex-direction: ${(props) =>
      props.index % 2 === 0 ? "row-reverse" : "row"};
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
