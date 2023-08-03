import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./testimonials-item.module.css";

type TestimonialsItemType = {
  personExperienceYears?: string;
  personImageUrl?: string;
  imageThumbnailUrl?: string;

  /** Style props */
  propWidth?: Property.Width;
  propBackgroundColor?: Property.BackgroundColor;
  propWidth1?: Property.Width;
};

const TestimonialsItem: NextPage<TestimonialsItemType> = ({
  personExperienceYears,
  personImageUrl,
  imageThumbnailUrl,
  propWidth,
  propBackgroundColor,
  propWidth1,
}) => {
  const testimonials01HoveredStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const cardHoveredStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      width: propWidth1,
    };
  }, [propBackgroundColor, propWidth1]);

  return (
    <div
      className={styles.testimonials01Hovered}
      style={testimonials01HoveredStyle}
    >
      <div className={styles.cardHovered} style={cardHoveredStyle} />
      <div className={styles.theSaladIs}>
        The salad is fresh!!! Don't ask about the sauce again, it's really
        delicious, it's going to be routine. I recommend this salad to all of
        you guys! because they really take care of the quality.
      </div>
      <div className={styles.years}>{personExperienceYears}</div>
      <div className={styles.selenaGomz}>{personImageUrl}</div>
      <img className={styles.containerIcon} alt="" src={imageThumbnailUrl} />
    </div>
  );
};

export default TestimonialsItem;
