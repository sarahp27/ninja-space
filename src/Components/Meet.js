import React from 'react'
import styles from './Main.module.css';
import BG_elements from '../images/BG_elements.png'
import ninja1 from '../images/meet_ninjas-02.png';
import Client_2 from '../images/meet_ninjas-03.png';
import Client_3 from '../images/meet_ninjas-04.png'; 
export default function Meet() {
  return (
    <>
     
<section className={styles.team_section}  id="meetNinjasonline">
        <div class='container'>
          <div class='heading_container heading_center'>
            <h2>Meet Ninja Online </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a
              euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget
              vitae malesuada, tortor tincidunt porta lorem lectus.
            </p> */}
          </div>
          <div class='row'>
            <div class='col-md-4 col-sm-6 mx-auto '>
            <div className={styles.box}>
                <div className={styles.ninjacontainer}>
                  <img src={ninja1} alt='' className={styles.image} />
                
                <div className={styles.overlay}>
                <div className={styles.text}>
                  <h5>Design Dynamo</h5>
                  <h6>Pixel Ninja</h6>
                  <p>
                  With a swift stroke of the digital katana, Pixel Ninja transforms visions into visual masterpieces.
                   Armed with creativity and a deep understanding of aesthetics, this designer wields the power of design with precision.
                  </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-4 col-sm-6 mx-auto '>
            <div className={styles.box}>
              <div className={styles.ninjacontainer}>
                  <img src={Client_2} alt='' className={styles.image} />
                  <div className={styles.overlay}>
                <div className={styles.text}>
                  <h5>Animation Alchemist</h5>
                  <h6>Motion Ninja</h6>
                  <p>Motion Ninja breathes life into stillness, conjuring captivating animations that dance and mesmerize.
                     Their animations are more than mere graphics; they're enchantments that tell stories in motion.</p>
                     </div>
                </div>
                 
                </div>
                
              </div>
            </div>
            <div class='col-md-4 col-sm-6 mx-auto '>
              <div className={styles.box}>
              <div className={styles.ninjacontainer}>
                  <img src={Client_3} className={styles.image} alt="blocks" />
                
                  <div className={styles.overlay}>
                <div className={styles.text}>
                  <h5>Social Sorcerer</h5>
                  <h6>Engagement Ninja</h6>
                  <p>
                  The Social Sorcerer wields the magic of social media, casting spells that engage and enchant audiences. 
                  With a strategic mind and a knack for trends, they navigate the digital landscape, ensuring your brand's 
                  presence shines brightly.
                  </p>
                  </div>
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
