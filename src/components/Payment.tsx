import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Payment({
  checked,
  checkedCash,
  handleChange,
  handleChangeCash,
}: {
  checked: boolean;
  checkedCash: boolean;
  handleChange: () => void;
  handleChangeCash: () => void;
}) {
  return (
    <Container>
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
