import styled from "styled-components";

export default function SecondCategory() {
  return (
    <Container>
      <Card>
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <Image src="/assets/home/mobile/image-speaker-zx9.png" alt="" />
        </div>
        <Section>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button>See Product</button>
        </Section>
      </Card>
      <Zx7Card>
        <Section>
          <h1>ZX9 SPEAKER</h1>
          <ProductButton>See Product</ProductButton>
        </Section>
      </Zx7Card>
      <YxCard>
        <Eaphonesimg src="/assets/home/mobile/image-earphones-yx1.jpg" alt="" />
        <div>
          <h1>YX1 EARPHONES</h1>
          <ProductButton>See Product</ProductButton>
        </div>
      </YxCard>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 100.5rem;
  padding: 0 2.4rem 2.4rem;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 500px) {
    padding: 0 3.9rem 3.9rem;
  }
  @media screen and (min-width: 900px) {
    margin: 0 auto;
    padding: 0 3.9rem;
    margin-bottom: 3.9rem;
  }
`;

const Card = styled.div`
  background-image: url("/assets/home/desktop/pattern-circles.svg");
  width: 100%;
  background-color: #d87d4a;
  padding: 3.4375rem 1.5rem;
  border-radius: 0.5rem;
  background-size: 31.25rem;
  background-position: center -50px;
  background-repeat: no-repeat;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
  p {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.75;
    text-align: center;
  }
  button {
    background: #000;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1.5rem 3.1rem;
    border: none;
    cursor: pointer;
  }
`;

const Image = styled.img`
  margin-bottom: 2rem;
  width: 10.765625rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Zx7Card = styled.div`
  background-image: url("/assets/home/mobile/image-speaker-zx7.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 6.3125rem 1.5rem;
  border-radius: 0.5rem;
`;
const ProductButton = styled.button`
  height: 3rem;
  display: flex;
  width: fit-content;
  text-transform: uppercase;
  font-size: 0.8125rem;
  align-items: center;
  font-weight: 700;
  padding: 0 1.875rem;
  border: 2px solid;
`;
const Eaphonesimg = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`;
const YxCard = styled.div`
  width: 100%;
  div {
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 0.5rem;
    padding: 2.5625rem 1.5rem;
    h1 {
      font-size: 1.75rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  }
`;
