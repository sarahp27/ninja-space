import React, { useState } from "react";
import styles from "./Main.module.css";
import Service_2 from "../images/Service_2.png";
import Service_3 from "../images/Service_3.png";
import Service_4 from "../images/Service_4.png";
import Service_5 from "../images/Service_5.png";
import Service_6 from "../images/Service_6.png";
import Service_7 from "../images/Service_7.png";

export default function Services() {
  return (
    <>
      {/* <!-- client section --> */}

      <section className={styles.service_section} id="myServices">
        <div class="container ">
          <div className={styles.heading_container}>
            <h2>OUR SERVICES</h2>
            <p><b>Discover our services designed to turn your ideas into remarkable realities.</b></p>
            {/* <p>Welcome to Ninja Space, where we use our creativity and expertise to create captivating visual experiences.
               We offer a wide range of services that will elevate your brand and leave a lasting impression on your audience</p> */}
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className={styles.box}>
                  <div className={styles.detailBox}>
                    {/* <h5><b>Minim Veniam</b></h5> */}
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p> */}
                  </div>
                  <div className={styles.imgBox}>
                    <img src={Service_2} alt="" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className={styles.box}>
                  <div className={styles.detailBox}>
                    {/* <h5><b>Minim Veniam</b></h5> */}
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p> */}
                  </div>
                  <div className={styles.imgBox}>
                    <img src={Service_3} alt="" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className={styles.box}>
                  <div className={styles.detailBox}>
                    {/* <h5><b>Minim Veniam</b></h5> */}
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p> */}
                  </div>
                  <div className={styles.imgBox}>
                    <img src={Service_4} alt="" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className={styles.box}>
                  <div className={styles.detailBox}>
                    {/* <h5>Minim Veniam</h5> */}
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p> */}
                  </div>
                  <div className={styles.imgBox}>
                    <img src={Service_5} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.carousel_btn_box}>
              <a
                class="carousel-control-prev"
                className={styles.carousel_control_prev}
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                className={styles.carousel_control_next}
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
