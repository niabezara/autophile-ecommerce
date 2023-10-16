import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Payment() {
  const [checked, setChecked] = React.useState(false);
  const [checkedCash, setCheckedCash] = React.useState(false);
  const [emoneyNumber, setEmoneyNumber] = useState("");
  const [emoneyPin, setEmoneyPin] = useState("");
  const handleChange = () => {
    setChecked(!checked);
    setCheckedCash(false);
  };
  const handleChangeCash = () => {
    setCheckedCash(!checkedCash);
    setChecked(false);
  };
  const handleEmoneyNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmoneyNumber(event.target.value);
  };

  const handleEmoneyPinChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmoneyPin(event.target.value);
  };
  return (
    <Container>
      <p style={{ fontSize: "12px", fontWeight: "700" }}>Payment Method</p>
      <CheckInput>
        <label>
          <Check checked={checked}></Check>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          e-Money
        </label>
      </CheckInput>
      <CheckInput>
        <label>
          <Check checked={checkedCash}></Check>
          <input
            type="checkbox"
            name="cash"
            checked={checked}
            onChange={handleChangeCash}
          />
          Cash on Delivery
        </label>
      </CheckInput>
      {checked && (
        <Emoney>
          <Section>
            <Article>
              <label>e-Money Number</label>
              {emoneyNumber === "" && <p>Error</p>}
            </Article>
            <input
              placeholder="238521993"
              value={emoneyNumber}
              onChange={handleEmoneyNumberChange}
            />
          </Section>
          <Section>
            <Article>
              <label>e-Money PIN</label>
              {emoneyNumber === "" && <p>Error</p>}
            </Article>
            <input
              placeholder="6891"
              value={emoneyPin}
              onChange={handleEmoneyPinChange}
            />
          </Section>
        </Emoney>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
`;

const CheckInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cfcfcf;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 0.8rem;

  /* display: block; */
  padding-left: 3.25rem;
  position: relative;
  margin-bottom: 1rem;
  cursor: pointer;
  input {
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
  }
  label {
    color: #000;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
    margin-left: 2rem;
  }
`;
const Check = styled.div<{ checked: boolean }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #cfcfcf;
  border-radius: 50%;
  position: absolute;
  left: 1rem;
  &:after {
    content: "";
    position: absolute;
    background: #d87d4a;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    transform: ${(props) => (props.checked ? "scale(1)" : "scale(0)")};
  }
`;
const Emoney = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin-top: 1rem;
`;
const Section = styled.div`
  input {
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    border: 1px solid #cfcfcf;
    border-radius: 0.5rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
    border-width: 1px;
    border-image: initial;
    opacity: 0.4;
    background: inherit;
    &:focus {
      border: 1px solid #d87d4a;
    }
  }
`;
const Article = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.214px;
    margin-bottom: 9px;
  }
  p {
    color: #cd2c2c;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.214px;
  }
`;
