import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Dialog({
  isOpen,
  onClose,
  modal = true,
  children,
  className = "",
}) {
  useEffect(() => {
    if (isOpen && modal) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, modal]);

  if (!isOpen) return null;

  return (
    <>
      {modal && <div className="dialog-backdrop" />}
      <div
        className={`dialog-container ${className}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        tabIndex={-1}
        role="dialog"
        aria-modal={modal}
      >
        <button className="dialog-close" onClick={onClose} aria-label="Fermer">
          &times;
        </button>
        {children}
      </div>
    </>
  );
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
