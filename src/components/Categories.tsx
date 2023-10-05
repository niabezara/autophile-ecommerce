import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Categories() {
  return (
    <Container>
      <Ul>
        <li>
          <Link to="" style={{ textDecoration: "inherit" }}>
            <div className="box">
              <img
                className="mainimg"
                src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                alt=""
              />
              <h2>HEADPHONES</h2>
              <div className="shopDiv">
                <p>Shop</p>
                <img
                  style={{ marginInlineStart: " 0.8325rem" }}
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="" style={{ textDecoration: "inherit" }}>
            <div className="box">
              <img
                className="mainimg"
                src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                alt=""
              />
              <h2>SPEAKERS</h2>
              <div className="shopDiv">
                <p>Shop</p>
                <img
                  style={{ marginInlineStart: " 0.8325rem" }}
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="" style={{ textDecoration: "inherit" }}>
            <div className="box">
              <img
                className="mainimg"
                src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                alt=""
              />
              <h2>EARPHONES</h2>
              <div className="shopDiv">
                <p>Shop</p>
                <img
                  style={{ marginInlineStart: " 0.8325rem" }}
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </li>
      </Ul>
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
    margin: 0 auto;
    padding: 0 3.9rem;
    margin-bottom: 3.9rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 5.57rem;
  list-style-type: none;
  cursor: pointer;
  li {
    background: #f1f1f1;
    text-align: center;
    border-radius: 0.5rem;
    position: relative;
    flex: 1;
  }
  .box {
    padding-top: 5.5rem;
    padding-bottom: 1.375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mainimg {
    object-fit: cover;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -38%);
    width: 8.625rem;
  }
  h2 {
    color: #000;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1.071px;
    text-transform: uppercase;
    line-height: 1.33;
    margin-bottom: 1rem;
  }
  .shopDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  p {
    color: #000;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
    .mainimg {
      width: 11.625rem;
    }
  }
`;
