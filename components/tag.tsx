import type { NextPage } from "next";
import styles from "./tag.module.css";
const Tag: NextPage = () => {
  return (
    <span className={styles.bestHealthySaladWrapper}>
      <div className={styles.bestHealthySalad}>#1 Best Healthy Salad</div>
    </span>
  );
};

export default Tag;
