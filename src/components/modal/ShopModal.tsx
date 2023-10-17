import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

interface ShopModalProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function ShopModal({
  open,
  children,
  setOpenModal,
}: ShopModalProps) {
  const portalElement = document.getElementById("portal");
  const CartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    const handler = (event: any) => {
      if (CartRef.current && !CartRef.current.contains(event.target as Node)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  if (!open || !portalElement) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <Div ref={CartRef}>{children}</Div>
    </>,
    portalElement
  );
}

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  @media (min-width: 500px) {
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

  @media (min-width: 900px) {
    transform: translate(10%, -50%);
  }
`;
