import React from "react";
import WEBSITE_images_work_1 from "../images/WEBSITE_images_work_1.png";
import WEBSITE_images_work_2 from "../images/WEBSITE_images_work_2.png";
import WEBSITE_images_work_3 from "../images/WEBSITE_images_work_3.png";
import styles from "./Main.module.css";

export default function Work() {
  function toHealit() {
    window.open("https://www.behance.net/gallery/180884139/Heal-It", "_blank");
  }
  function tosunday() {
    window.open(
      "https://www.behance.net/gallery/181006577/Sunday-ice-cream-Branding",
      "_blank"
    );
  }
  function toBurger() {
    window.open(
      "https://www.behance.net/gallery/180503639/MrBurger-Relaunch",
      "_blank"
    );
  }
  return (
    <>
      <section className={styles.work_section} id="myWork">
        <div class="container">
          <div className={styles.workNinja}>
            <div className={styles.heading_container}>
              <h2>
                <b>OUR WORK</b>
              </h2>
              <p>
                <b>At Ninja Space,</b> we create captivating visual stories that
                leave a lasting impression. From logos to packaging and social
                media design, we give your brand energy and vitality. Our
                commitment to excellence ensures every pixel and concept
                amplifies your unique story.{" "}
                <b>
                  Join us on a brand journey that captivates hearts and
                  showcases groundbreaking design. Elevate your brand with our
                  limitless creativity, where imagination and impact converge
                  seamlessly.
                </b>
              </p>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img src={WEBSITE_images_work_1} alt="" width="200px" />
                  </div>
                  <div className={styles.detailBox}>
                    {/* <img src={Client_1} alt=''/> */}
                    <h6>Heal It</h6>
                    {/* <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p> */}
                    <button className={styles.ninjaBtns} onClick={toHealit}>
                      View Porfolio
                    </button>
                    {/* <a href=''>Read More</a> */}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img src={WEBSITE_images_work_2} alt="" width="200px" />
                  </div>
                  <div className={styles.detailBox}>
                    {/* <img src={Client_1} alt=''/> */}
                    <h6>sunday</h6>
                    {/* <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p> */}
                    {/* <a href=''>Read More</a> */}
                    <button className={styles.ninjaBtns} onClick={tosunday}>
                      View Porfolio
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img src={WEBSITE_images_work_3} alt="" width="200px" />
                  </div>
                  <div className={styles.detailBox}>
                    {/* <img src={Client_1} alt=''/> */}
                    <h6>Mr burger</h6>
                    {/* <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p> */}
                    <button className={styles.ninjaBtns} onClick={toBurger}>
                      View Porfolio
                    </button>
                    {/* <a href=''>Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
