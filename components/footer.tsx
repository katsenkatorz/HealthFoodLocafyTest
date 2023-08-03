import type { NextPage } from "next";
import styles from "./footer.module.css";
const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.section01}>
        <div className={styles.jezSaladParent}>
          <div className={styles.jezSalad}>
            <span className={styles.jez}>
              <span>JEZ</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <b className={styles.salad}>SALAD</b>
          </div>
          <div className={styles.jezSaladIsContainer}>
            <p
              className={styles.jezSaladIs}
            >{`Jez Salad is the pioneer of `}</p>
            <p className={styles.jezSaladIs}>{`healthy fruit salad with `}</p>
            <p className={styles.jezSaladIs}>high nutrition.</p>
          </div>
        </div>
        <div className={styles.copyrightJezSalad}>©Copyright Jez Salad</div>
      </div>
      <div className={styles.section4}>
        <div className={styles.feature}>Feature</div>
        <div className={styles.menu}>Menu</div>
        <div className={styles.menu}>Promo</div>
        <div className={styles.menu}>Contact</div>
        <div className={styles.menu}>About us</div>
      </div>
      <div className={styles.section02}>
        <div className={styles.feature}>Get in Touch</div>
        <div className={styles.address}>
          <img
            className={styles.communicationLocationOn}
            alt=""
            src="/communication--location-on.svg"
          />
          <div className={styles.menu}>
            <p className={styles.jezSaladIs}>8819 Ohio St. South Gate,</p>
            <p className={styles.jezSaladIs}>CA 90280</p>
          </div>
        </div>
        <div className={styles.email}>
          <img
            className={styles.communicationLocationOn}
            alt=""
            src="/communication--email.svg"
          />
          <div className={styles.menu}>Ourstudio@hello.com</div>
        </div>
        <div className={styles.phone}>
          <img
            className={styles.communicationLocationOn}
            alt=""
            src="/communication--call.svg"
          />
          <div className={styles.menu}>+1 386-688-3295</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <img className={styles.linkedin21} alt="" src="/linkedin-2-1.svg" />
          <img className={styles.linkedin21} alt="" src="/instagram-2-1.svg" />
        </div>
        <div className={styles.menu}>Follow our social media.</div>
      </div>
    </div>
  );
};

export default Footer;
