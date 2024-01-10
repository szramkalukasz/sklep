import styles from "./CartSummary.module.css";

import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";

export function CartSummary({ products }) {
  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów: </p>
        <p>398zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy: </p>
        <p>49zł</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty: </p>
        <p>447zł</p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} />
        <p>Darmowa dostawa od 500zł</p>
      </div>
    </div>
  );
}
