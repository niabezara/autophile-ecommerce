import styled from "styled-components";
import Products from "../data/data.json";

export default function Earphones() {
  return (
    <Container>
      {Products.map(
        (item) =>
          item.category === "earphones" && (
            <Wrapper key={item.id}>
              <Card>
                <Image
                  src={
                    window.innerWidth >= 700
                      ? item.categoryImage.tablet
                      : item.categoryImage.mobile
                  }
                  alt=""
                />
              </Card>
              <div>
                {item.new && <p className="News">NEW PRODUCT</p>}
                <h3 className="Title">{item.name}</h3>
                <p className="ProductDescription">{item.description}</p>
                <button className="GlobalButton">See Product</button>
              </div>
            </Wrapper>
          )
      )}
    </Container>
  );
}
const Container = styled.main`
  display: flex;
  flex-direction: column-reverse;
  padding: 2.4rem;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;
