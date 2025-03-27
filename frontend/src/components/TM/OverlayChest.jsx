// Overlay.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './OverlayChest.module.css';

const OverlayChest = ({ children, onClose, style = {} }) => {
  // Erstelle einen Container-DIV für das Portal
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className={styles.overlay} style={style} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    el
  );
};

export default OverlayChest;
