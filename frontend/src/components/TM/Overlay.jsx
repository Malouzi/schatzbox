//Overlay.jsx
/* ANSTATT in der index.html im public ordner?? */


import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Overlay.module.css';

const Overlay = ({ children, onClose }) => {
  //Container-DIV für das Portal erstellen - JO!
  const el = document.createElement('div');

  useEffect(() => {
    // den Container an den body anhängen, wenn die Komponente gemountet wird
    document.body.appendChild(el);
    // den Container wieder entfernen, wenn die Komponente unmountet
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.closeButton5} onClick={onClose}>
          ✖
        </button>
      </div>
    </div>,
    el
  );
};

export default Overlay;
