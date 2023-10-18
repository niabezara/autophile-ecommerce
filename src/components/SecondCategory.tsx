import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fadeInRightVariant, fadeInLeftVariant } from "../utils/Variants";

export default function SecondCategory() {
  return (
    <Container>
      <Card
        as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <Image
            src={
              window.innerWidth >= 900
                ? "/assets/home/desktop/image-speaker-zx9.png"
                : window.innerWidth >= 500
                ? "/assets/home/tablet/image-speaker-zx9.png"
                : "/assets/home/mobile/image-speaker-zx9.png"
            }
            alt=""
          />
        </div>
        <Section>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={`/product/zx9-speaker`}>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#4C4C4C" }}
            >
              See Product
            </motion.button>
          </Link>
        </Section>
      </Card>
      <Zx7Card
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <section>
          <h1>ZX7 SPEAKER</h1>
          <Link to={`/product/zx7-speaker`} style={{ textDecoration: "none" }}>
            <ProductButton
              whileHover={{
                scale: 1.1,
                backgroundColor: "#000",
                color: "white",
              }}
            >
              See Product
            </ProductButton>
          </Link>
        </section>
      </Zx7Card>
      <YxCard
        as={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <Eaphonesimg src="/assets/home/mobile/image-earphones-yx1.jpg" alt="" />
        <div>
          <h1>YX1 EARPHONES</h1>
          <Link
            to={`/product/yx1-earphones`}
            style={{ textDecoration: "none" }}
          >
            <ProductButton
              whileHover={{
                scale: 1.1,
                backgroundColor: "#000",
                color: "white",
              }}
            >
              See Product
            </ProductButton>
          </Link>
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
    /* padding: 0 3.9rem 3.9rem; */
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

  @media screen and (min-width: 500px) {
    background-size: 50rem;
    background-position: center -131px;
    padding: 3.25rem 1.5rem 4rem;
  }

  @media screen and (min-width: 900px) {
    height: 50rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8.625rem;
    place-items: center;
    background-position: -90px -50px;
    padding: 0 5.9375rem;
    background-size: auto;
  }
`;

const Image = styled.img`
  margin-bottom: 2rem;
  width: 10.765625rem;
  @media screen and (min-width: 500px) {
    width: 14.8125rem;
  }
  @media screen and (min-width: 900px) {
    margin: auto 0;
    width: 100%;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  @media screen and (min-width: 500px) {
    width: 21.8125rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 900px) {
    align-items: flex-start;

    margin: 0 auto;
    h1 {
      text-align: unset;
    }
  }
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
  section {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  @media screen and (min-width: 500px) {
    background-image: url("/assets/home/tablet/image-speaker-zx7.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    section {
      padding-left: 3.875rem;
      font-size: 28px;
    }
  }
  @media screen and (min-width: 900px) {
    background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    section {
      padding-left: 5.9375rem;
    }
  }
`;
const ProductButton = styled(motion.button)`
  height: 3rem;
  display: flex;
  width: fit-content;
  text-transform: uppercase;
  font-size: 13px;
  align-items: center;
  font-weight: 700;
  padding: 0 1.875rem;
  border: 1px solid #000;
`;
const Eaphonesimg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 500px) {
    margin-bottom: unset;
  }
`;
const YxCard = styled.div`
  width: 100%;
  div {
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 0.5rem;
    padding: 2.5625rem 1.5rem;
    h1 {
      font-size: 28px;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
  }
`;
