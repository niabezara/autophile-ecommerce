import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Billing from "../components/Billing";

export default function CheckOut() {
  const navigate = useNavigate();

  return (
    <Container>
      <SubContainer>
        <button className="Back" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <Wrapper>
          <h1>CHECKOUT</h1>
          <Billing />
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
  background-color: #f2f2f2;
  @media screen and (min-width: 900px) {
    /* padding: 9.7rem; */
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.4rem;
  width: 100%;

  .Back {
    border: none;
    background: transparent;
    color: #000;
    opacity: 0.5;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 2.4rem;
  }
  @media screen and (min-width: 500px) {
    padding: 3.9rem;
  }
  @media screen and (min-width: 900px) {
    max-width: 100.5rem;
    margin: 0 auto;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
`;
