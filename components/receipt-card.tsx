import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./receipt-card.module.css";

type ReceiptCardType = {
  fruitOrchardImageUrl?: string;
  propertyDescription?: string;
  brandDescription?: string;
  sectorDescription?: string;
  storeBranchDescription?: string;
  imageDimensions?: string;

  /** Style props */
  propAlignSelf?: Property.AlignSelf;
};

const ReceiptCard: NextPage<ReceiptCardType> = ({
  fruitOrchardImageUrl,
  propertyDescription,
  brandDescription,
  sectorDescription,
  storeBranchDescription,
  imageDimensions,
  propAlignSelf,
}) => {
  const langsungDariKebunContainerStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.card}>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src={fruitOrchardImageUrl} />
        <div className={styles.frameParent}>
          <div className={styles.ownFruitOrchardParent}>
            <div className={styles.ownFruitOrchard}>{propertyDescription}</div>
            <div
              className={styles.langsungDariKebunContainer}
              style={langsungDariKebunContainerStyle}
            >
              <p className={styles.langsungDariKebun}>{brandDescription}</p>
              <p className={styles.langsungDariKebun}>{sectorDescription}</p>
              <p className={styles.langsungDariKebun}>
                {storeBranchDescription}
              </p>
            </div>
          </div>
          <div className={styles.learnMoreParent}>
            <div className={styles.learnMore}>Learn more</div>
            <img
              className={styles.iconlylightarrowRight}
              alt=""
              src={imageDimensions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptCard;
