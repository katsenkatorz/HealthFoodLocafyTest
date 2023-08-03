import type { NextPage } from "next";
import styles from "./button.module.css";
const Button: NextPage = () => {
  return (
    <button className={styles.orderFoodWrapper} autoFocus>
      <div className={styles.orderFood}>Order Food</div>
    </button>
  );
};

export default Button;
