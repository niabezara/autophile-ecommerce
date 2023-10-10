import React from "react";
import ReactDom from "react-dom";

interface ShopModalProps {
  open: boolean;
  children: React.ReactNode;
}

export default function ShopModal({ open, children }: ShopModalProps) {
  const portalElement = document.getElementById("portal");

  if (!open || !portalElement) return null;
  return ReactDom.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          top: "5.1rem",
          backgroundColor: "rgba(0,0,0,.7)",
          zIndex: 1000,
        }}
      />
      <div
        style={{
          position: "fixed",

          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",

          zIndex: 1000,
        }}
      >
        {children}
      </div>
    </>,
    portalElement
  );
}
