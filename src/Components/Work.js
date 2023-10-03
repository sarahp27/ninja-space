import React from "react";
import WEBSITE_images_work_1 from '../images/WEBSITE_images_work_1.png';
import styles from './Main.module.css'


export default function Work() {
  return (
    <>
       <section className={styles.work_section} id="myWork">
        <div class='container'>
          <div className={styles.workNinja}>
          <div className={styles.heading_container} >
            <h2><b>Ninja's Worked for</b></h2>
            <p><b>At Ninja Space,</b> we are the dynamic architects of captivating visual storytelling. We
            don't just design; we craft experiences that leave an indelible mark. From forging unforgettable logos
            to sculpting captivating packaging and beyond, we infuse vitality into your brand's very essence.
            Our mastery extends seamlessly to social media design and marketing, where we transcend ordinary 
            ideas to create shareable, mesmerizing content. We hold an unswerving commitment to the pinnacle 
            of branding excellence, making you shine brightly amidst the crowd. Every pixel, every concept, 
            receives our utmost attention, fine-tuned to amplify your distinctive narrative. Join us to embark 
            on extraordinary brand journeys, captivating hearts through groundbreaking design innovation. 
            Elevate your brand with our boundless creativity, where imagination and impact converge in harmony.
</p>
          </div>
          <div class='row'>
            <div class='col-md-4'>
              <div className ={styles.box}>
                <div className={styles.imgBox}>
                <img src={WEBSITE_images_work_1} alt='' width='200px'/>
                  
                </div>
                <div className ={styles.detailBox}>
                  {/* <img src={Client_1} alt=''/> */}
                  <h6>Home Security</h6>
                  <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p>
                  <button className={styles.ninjaBtns}>View Porfolio</button>
                  {/* <a href=''>Read More</a> */}
                </div>
              </div>
            </div>
            <div class='col-md-4'>
            <div className ={styles.box}>
                <div className={styles.imgBox}>
                <img src={WEBSITE_images_work_1} alt=''  width='200px'/>
                  
                </div>
                <div className ={styles.detailBox}>
                {/* <img src={Client_1} alt=''/> */}
                  <h6>Office Security</h6>
                  <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p>
                  {/* <a href=''>Read More</a> */}
                  <button  className={styles.ninjaBtns}>View Porfolio</button>
                </div>
              </div>
            </div>
            <div class='col-md-4'>
            <div className ={styles.box}>
                <div className={styles.imgBox}>
                <img src={WEBSITE_images_work_1} alt=''  width='200px'/>
                  
                </div>
                <div className ={styles.detailBox}>
                {/* <img src={Client_1} alt=''/> */}
                  <h6>Bodyguard</h6>
                  <p>
                    Minima consequatur architecto eaque assumenda ipsam itaque
                    quia eum in doloribus debitis impedit ut minus tenetur
                    corrupti excepturi ullam.
                  </p>
                  <button  className={styles.ninjaBtns}>View Porfolio</button>
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
