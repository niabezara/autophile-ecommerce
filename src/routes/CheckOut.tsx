import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CheckOut() {
  const navigate = useNavigate();

  return (
    <Container>
      <SubContainer>
        <button className="Back" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <Wrapper></Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

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
  }
`;
