import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeInRightVariant, fadeInLeftVariant } from "../utils/Variants";
export default function Info() {
  return (
    <Container>
      <Image
        as={motion.img}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        src={
          window.innerWidth >= 900
            ? "/assets/shared/desktop/image-best-gear.jpg"
            : window.innerWidth >= 500
            ? "/assets/shared/tablet/image-best-gear.jpg"
            : "/assets/shared/mobile/image-best-gear.jpg"
        }
        alt=""
      />

      <Card
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 100.5rem;
  padding: 0 2.4rem 8.4rem;
  @media screen and (min-width: 500px) {
    padding: 0 3.9rem 3.9rem;
  }
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    place-items: center;
    column-gap: 7.8125rem;
    margin: 0 auto;
    padding: 0 3.9rem;
    margin-bottom: 3.9rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  margin-bottom: 3.2rem;
`;
const Card = styled.div`
  width: 100%;
  max-width: 44.8125rem;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: #000;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
    span {
      color: #d87d4a;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
  p {
    color: #000;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
  }
  @media screen and (min-width: 900px) {
    max-width: unset;
    grid-column: 1/2;

    p {
      text-align: left;
    }
    h1 {
      text-align: left;
    }
  }
`;
