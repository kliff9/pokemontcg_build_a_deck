import "./ScreenCSS/Model.css";
import ReactDom from "react-dom";
import { useParams } from "react-router-dom";
import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function PokeCardModel({ open, children, onClose }) {
  const params = useParams();
  const { id: cardId } = params;

  console.log("cardid Model:", cardId);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
