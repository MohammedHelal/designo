import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ children, open, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) modal.showModal();

    return () => modal.close();
  });

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Modal;
