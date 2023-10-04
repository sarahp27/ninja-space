import React from "react";
import styles from './Main.module.css';
import Service_2 from '../images/Service_2.png';
import Service_3 from '../images/Service_3.png';
import Service_4 from '../images/Service_4.png';
import Service_5 from '../images/Service_5.png';
import Service_6 from '../images/Service_6.png';
import Service_7 from '../images/Service_7.png';



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
      class='carousel slide'
      data-ride='carousel'
    >
      <div class='carousel-inner'>
        <div class='carousel-item active'>
          <div className ={styles.box}>
            <div className ={styles.imgBox}>
              <img src={Service_2} alt='' />
            </div>
            {/* <div className ={styles.detailBox}>
              <h4>Minim Veniam</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
            </div> */}
          </div>
        </div>
        <div class='carousel-item'>
        <div className ={styles.box}>
          <div className ={styles.imgBox}>
              <img src={Service_3} alt='' />
            </div>
            {/* <div className ={styles.detailBox}>
              <h4>Minim Veniam</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
            </div> */}
          </div>
        </div>
        <div class='carousel-item'>
        <div className ={styles.box}>
        <div className ={styles.imgBox}>
              <img src={Service_4} alt='' />
            </div>
            {/* <div className ={styles.detailBox}>
              <h4>Minim Veniam</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
            </div> */}
          </div>
        </div>
        <div class='carousel-item'>
        <div className ={styles.box}>
        <div className ={styles.imgBox}>
              <img src={Service_5} alt='' />
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
