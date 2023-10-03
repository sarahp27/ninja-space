import React from "react";
import Client_1 from '../images/Client_1.png';
import Client_2 from '../images/Client_2.png';
import Client_3 from '../images/Client_3.png'; 
import styles from './Main.module.css';

export default function Services() {
  return (
    <>
    {/* <!-- client section --> */}

<section id='myServices' className ={styles.service_section}>
  <div class='container '>
    <div class='heading_container heading_center'>
      <h2>OUR SERVICES</h2>
      
    </div>
    <div
      id='carouselExampleControls'
      class='carousel'
      data-ride='carousel'
    >
      <div class='carousel'>
        <div class='carousel-item active'>
          <div className ={styles.box}>
            <div className ={styles.imgBox}>
              <img src={Client_1} alt='' />
            </div>
            <div className ={styles.detailBox}>
              <h4>Minim Veniam</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
            </div>
          </div>
        </div>
        <div class='carousel_item'>
        <div className ={styles.box}>
          <div className ={styles.imgBox}>
              <img src={Client_2} alt='' />
            </div>
            <div className ={styles.detailBox}>
              <h4>Minim Veniam</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
            </div>
          </div>
        </div>
        <div class='carousel-item '>
        <div className ={styles.box}>
        <div className ={styles.imgBox}>
              <img src={Client_3} alt='' />
            </div>
            <div className ={styles.detailBox}>
              <h4>Minim Veniam</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carousel_btn_box}>
        <a
          className={styles.carousel_control_prev}
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <i class='fa fa-angle-left' aria-hidden='true'></i>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          className={styles.carousel_control_next}
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <i class='fa fa-angle-right' aria-hidden='true'></i>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
