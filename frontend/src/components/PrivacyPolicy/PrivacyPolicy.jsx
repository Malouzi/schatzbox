import React from "react";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1>Datenschutz</h1>
      <p>Hier stehen Informationen zum Datenschutz.</p>
      <button className={styles.button}>Mehr erfahren</button>
    </div>
  );
}

// export default function Datenschutz() {
//   return (
//     <div className="datenschutz">
//       <h1>Datenschutz</h1>
//       <p>Hier kommt die Datenschutzerklärung.</p>
//     </div>
//   );
// }
