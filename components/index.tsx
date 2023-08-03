import type { NextPage } from "next";
import { useCallback } from "react";
import Navbar from "./navbar";
import Tag from "./tag";
import Button from "./button";
import ReceiptCard from "./receipt-card";
import TestimonialsItem from "./testimonials-item";
import Footer from "./footer";
import styles from "./index.module.css";
const MacBookPro1: NextPage = () => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <a className={styles.macbookPro1}>
      <img className={styles.macbookPro1Child} alt="" src="/group-8438.svg" />
      <img className={styles.macbookPro1Item} alt="" src="/ellipse-42.svg" />
      <img className={styles.macbookPro1Inner} alt="" src="/ellipse-43.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-44.svg" />
      <div className={styles.landingPage}>
        <div className={styles.header}>
          <Navbar />
          <div className={styles.header1}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <Tag />
                <div className={styles.frameGroup}>
                  <b className={styles.skipTheDietContainer}>
                    <p className={styles.skipTheDiet}>
                      <span className={styles.skip}>Skip</span>
                      <span>{` The Diet, `}</span>
                    </p>
                    <p className={styles.skipTheDiet}>{`Just Eat Healthy `}</p>
                    <p className={styles.skipTheDiet}>With Jez Salad</p>
                  </b>
                  <div className={styles.imagineYouDontContainer}>
                    <p
                      className={styles.skipTheDiet}
                    >{`Imagine you don't need a diet because we provide `}</p>
                    <p className={styles.skipTheDiet}>
                      healthy and delicious food for you!
                    </p>
                  </div>
                </div>
                <Button />
              </div>
              <div className={styles.featureInformation}>
                <div className={styles.customer}>
                  <div className={styles.div}>5.000+</div>
                  <div className={styles.customer1}>Customer</div>
                </div>
                <div className={styles.customer}>
                  <div className={styles.div}>8.000+</div>
                  <div className={styles.customer1}>Delivery</div>
                </div>
                <div className={styles.customer}>
                  <div className={styles.div}>1.000+</div>
                  <div className={styles.customer1}>Ratings</div>
                </div>
              </div>
            </div>
            <div className={styles.illustration}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <img className={styles.groupIcon1} alt="" src="/group1.svg" />
              <img
                className={styles.illustrationChild}
                alt=""
                src="/group-8425@2x.png"
              />
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.illustrationItem} />
              <div className={styles.dailyCaloriesParent}>
                <div className={styles.dailyCalories}>Daily Calories</div>
                <div className={styles.cal}>
                  <span>{`123 `}</span>
                  <span className={styles.cal1}>Cal</span>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
                <div className={styles.frameChild} />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild5} />
                <div className={styles.frameChild6} />
                <div className={styles.frameChild7} />
                <div className={styles.frameChild8} />
                <div className={styles.frameChild6} />
                <div className={styles.frameChild10} />
                <div className={styles.frameChild11} />
                <div className={styles.frameChild12} />
              </div>
              <div className={styles.ourHappyCustomerParent}>
                <div className={styles.ourHappyCustomer}>
                  Our Happy Customer
                </div>
                <div className={styles.reviews}>
                  <span className={styles.span}>{`4.9  `}</span>
                  <span className={styles.reviews1}>(1.989 Reviews)</span>
                </div>
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar.svg"
                />
                <img className={styles.yaIcon} alt="" src="/ya.svg" />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild13} />
                <img
                  className={styles.iconlylightheart}
                  alt=""
                  src="/iconlylightheart.svg"
                />
                <div className={styles.frameChild14} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.whyChooseUsForYourHealthyParent}>
            <div className={styles.whyChooseUsForContainer}>
              <p className={styles.skipTheDiet}>WHY CHOOSE US</p>
              <p className={styles.skipTheDiet}>
                <span>{`FOR `}</span>
                <span className={styles.skip}>YOUR HEALTHY FOOD</span>
              </p>
            </div>
            <div className={styles.weContinueTo}>
              We continue to consistently choose and maintain the quality of the
              fruit served, so that it remains fresh and nutritious when you eat
              it.
            </div>
          </div>
          <div className={styles.cardParent}>
            <ReceiptCard
              fruitOrchardImageUrl="/icon.svg"
              propertyDescription="Own fruit orchard"
              brandDescription="Langsung dari Kebun Sendiri yang "
              sectorDescription="tersebar di setiap provinsi yang "
              storeBranchDescription="memiliki cabang toko Jez Salad."
              imageDimensions="/iconlylightarrow--right.svg"
            />
            <div className={styles.card}>
              <div className={styles.iconParent}>
                <img className={styles.icon} alt="" src="/icon1.svg" />
                <div className={styles.frameContainer}>
                  <div className={styles.healthyFruitSaladParent}>
                    <div className={styles.healthyFruitSalad}>
                      #1 Healthy Fruit Salad
                    </div>
                    <div className={styles.thePioneerOfContainer}>
                      <p
                        className={styles.skipTheDiet}
                      >{`The pioneer of healthy fruit salads that `}</p>
                      <p
                        className={styles.skipTheDiet}
                      >{`are delicious & suitable for all people `}</p>
                      <p className={styles.skipTheDiet}>
                        with the best quality assurance.
                      </p>
                    </div>
                  </div>
                  <button className={styles.learnMoreParent} autoFocus>
                    <div className={styles.learnMore}>Learn more</div>
                    <img
                      className={styles.iconlylightarrowRight}
                      alt=""
                      src="/iconlylightarrow--right1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            <ReceiptCard
              fruitOrchardImageUrl="/icon2.svg"
              propertyDescription="100 Top Brand"
              brandDescription="We are one of the best brands in the "
              sectorDescription="Food and Beverage sector "
              storeBranchDescription="in Indonesia."
              imageDimensions="/iconlylightarrow--right2.svg"
              propAlignSelf="stretch"
            />
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.review}>
            <div className={styles.frameContainer}>
              <div className={styles.frameParent1}>
                <div className={styles.frameGroup}>
                  <div className={styles.whatArePeopleContainer}>
                    <p className={styles.skipTheDiet}>{`What Are People `}</p>
                    <p className={styles.skipTheDiet}>
                      <span>{`Saying `}</span>
                      <span className={styles.skip}>About Us</span>
                    </p>
                  </div>
                  <div className={styles.weAreVery}>
                    We are very happy if you are satisfied with our service and
                    products, let's read pure reviews from customers who bought
                    our products.
                  </div>
                </div>
                <div className={styles.sliderIndicators}>
                  <b className={styles.b}>/ 05</b>
                  <b className={styles.b1}>02</b>
                </div>
              </div>
              <div className={styles.previousButtonParent}>
                <img
                  className={styles.previousButtonIcon}
                  alt=""
                  src="/previous-button.svg"
                />
                <img
                  className={styles.previousButtonIcon}
                  alt=""
                  src="/next-button.svg"
                />
              </div>
            </div>
            <div className={styles.testimonials01HoveredParent}>
              <TestimonialsItem
                personExperienceYears="22 Years"
                personImageUrl="Selena Gomz"
                imageThumbnailUrl="/container@2x.png"
              />
              <TestimonialsItem
                personExperienceYears="24 Years"
                personImageUrl="David Ken"
                imageThumbnailUrl="/container1@2x.png"
                propWidth="270px"
                propBackgroundColor="rgba(255, 255, 255, 0.8)"
                propWidth1="270px"
              />
              <TestimonialsItem
                personExperienceYears="21 Years"
                personImageUrl="Jennifer Sina"
                imageThumbnailUrl="/container2@2x.png"
                propWidth="296px"
                propBackgroundColor="rgba(255, 255, 255, 0.8)"
                propWidth1="296px"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.titleParent}
          data-scroll-to="frameContainer"
          onClick={onFrameContainerClick}
        >
          <div className={styles.title}>
            <div className={styles.menuYangMembuatmu}>
              MENU YANG MEMBUATMU JATUH CINTA
            </div>
            <div className={styles.enjoyTheBestContainer}>
              <p
                className={styles.skipTheDiet}
              >{`ENJOY THE BEST MENU AND GET `}</p>
              <p className={styles.skipTheDiet}>
                <span>{` `}</span>
                <span className={styles.skip}>DISCOUNTS</span>
                <span className={styles.available}> AVAILABLE</span>
              </p>
            </div>
          </div>
          <div className={styles.menuParent}>
            <div className={styles.menu}>
              <div className={styles.miniSaladYummyParent}>
                <div
                  className={styles.miniSaladYummy}
                >{`Mini Salad Yummy `}</div>
                <b className={styles.b2}>$ 2.99</b>
              </div>
            </div>
            <div className={styles.menu1}>
              <div className={styles.completedSaladParent}>
                <div className={styles.completedSalad}>Completed Salad</div>
                <b className={styles.b2}>$ 3.99</b>
              </div>
            </div>
            <div className={styles.menu2}>
              <div className={styles.completedSaladParent}>
                <div className={styles.completedSalad}>Salad Yummy Red</div>
                <b className={styles.b2}>$ 3.99</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.subscribe}>
            <img className={styles.subscribeChild} alt="" src="/frame-51.svg" />
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.ourSubscribeParent}>
                  <div className={styles.menuYangMembuatmu}>Our Subscribe</div>
                  <div className={styles.enjoyTheBestContainer}>
                    <p
                      className={styles.skipTheDiet}
                    >{`Subscribe To Get The Latest `}</p>
                    <p className={styles.skipTheDiet}>Promo from Jez Salad</p>
                  </div>
                </div>
                <div className={styles.weRecommendedYouContainer}>
                  <p
                    className={styles.skipTheDiet}
                  >{`We recommended you to subscribe to our promo program, `}</p>
                  <p className={styles.skipTheDiet}>
                    drop your email below to get daily update about us
                  </p>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.enterYourEmailAddressWrapper}>
                  <div className={styles.enterYourEmail}>
                    Enter your email address
                  </div>
                </div>
                <button className={styles.subscribeWrapper} autoFocus>
                  <div className={styles.subscribe1}>Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </a>
  );
};

export default MacBookPro1;
