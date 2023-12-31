import styled from "styled-components";
import Categories from "../components/Categories";
import SecondCategory from "../components/SecondCategory";
import Info from "../components/Info";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 2 }}
    >
      <Conatiner>
        <div className="subCont">
          <New>NEW PRODUCT</New>
          <Title>XX99 Mark II HeadphoneS</Title>
          <Desc>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Desc>
          <Link to={`/product/xx99-mark-one-headphones`}>
            <motion.button
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="GlobalButton"
            >
              See Product
            </motion.button>
          </Link>
        </div>
      </Conatiner>
      <Categories />
      <SecondCategory />
      <Info />
    </motion.main>
  );
}

const Conatiner = styled.div`
  width: 100%;
  padding: 0 2.3rem;
  position: relative;
  background: url("/assets/home/mobile/image-header.jpg") lightgray 0px 0px /
    100% 100% no-repeat;
  opacity: 1.5021;
  background-position: center;
  gap: 1.5rem;
  /* filter: brightness(0.6); */
  background-size: cover;
  background-color: black;

  .subCont {
    display: flex;
    height: 100vh;
    row-gap: 1.6rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 500px) {
    background: url("/assets/home/tablet/image-header.jpg") lightgray 0px 0px /
      100% 100% no-repeat;
    padding: 0 3.9rem;
  }
  @media screen and (min-width: 900px) {
    background: url("/assets/home/desktop/image-hero.jpg") lightgray 0px 0px /
      100% 100% no-repeat;
    align-items: flex-start;
    padding: 0 3.9rem;
    /* padding: 0 16.5rem; */
    gap: 2.4rem;
    .subCont {
      max-width: 100.5rem;
      align-items: flex-start;
      margin: 0 auto;
    }
  }
`;
const New = styled.p`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0.4964;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  @media screen and (min-width: 500px) {
    max-width: 39.6rem;
  }
  @media screen and (min-width: 900px) {
    text-align: left;
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }
`;
const Desc = styled.p`
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.75;
  margin-bottom: 1.2rem;
  @media screen and (min-width: 500px) {
    max-width: 39.6rem;
  }
  @media screen and (min-width: 900px) {
    text-align: left;
    margin-bottom: 2rem;
  }
`;
