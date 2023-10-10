import React, { useEffect } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

interface ShopModalProps {
  open: boolean;
  children: React.ReactNode;
}

export default function ShopModal({ open, children }: ShopModalProps) {
  const portalElement = document.getElementById("portal");
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  if (!open || !portalElement) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <Div>{children}</Div>
    </>,
    portalElement
  );
}

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 6.1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  @media (min-width: 500px) {
    top: 6rem;
    overflow-x: hidden;
  }
`;

const Div = styled.div`
  position: fixed;
  width: 100%;
  max-width: 40.5625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  @media (min-width: 500px) {
    /* top: 30%;
    transform: translate(-30%, -50%);
    right: 50%; */
  }
  @media (min-width: 900px) {
    /* top: 0%; */
    /* left: unset;
    right: 8%; */
  }
`;
