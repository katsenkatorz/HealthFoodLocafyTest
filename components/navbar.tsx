import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./navbar.module.css";
const Navbar: NextPage = () => {
  const onMenuHeaderContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='menuHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenuTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.topHeader}>
      <div className={styles.logo}>
        <div className={styles.logo1}>
          <span className={styles.jez}>
            <span>JEZ</span>
            <span className={styles.span}>{`  `}</span>
          </span>
          <b className={styles.salad}>SALAD</b>
        </div>
      </div>
      <div
        className={styles.menuHeader}
        data-scroll-to="menuHeaderContainer"
        onClick={onMenuHeaderContainerClick}
      >
        <b className={styles.home}>Home</b>
        <div className={styles.menu} onClick={onMenuTextClick}>
          Menu
        </div>
        <div className={styles.contact}>Contact</div>
        <div className={styles.contact}>About Us</div>
      </div>
      <button className={styles.button} autoFocus>
        <div className={styles.sign}>Sign</div>
      </button>
    </div>
  );
};

export default Navbar;
