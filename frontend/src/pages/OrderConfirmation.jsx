import React from 'react';
import styles from './OrderConfirmation.module.css';

const OrderConfirmation = () => {
  return (
    <div className={styles.confirmationContainer}>
      <h1>Bestellung abgesendet</h1>
      <p>Vielen Dank für Ihre Bestellung! Sie erhalten in Kürze eine Bestätigung.</p>
    </div>
  );
};

export default OrderConfirmation;
