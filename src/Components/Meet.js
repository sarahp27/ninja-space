import React from 'react'
import styles from './Main.module.css';
import BG_elements from '../images/BG_elements.png'
import ninja1 from '../images/meet_ninjas-b.png';
import ninja2 from '../images/meet_ninjas-d.png';
import ninja3 from '../images/meet_ninjas-c.png'; 
export default function Meet() {
  return (
    <>
     
<section className={styles.team_section}  id="meetNinjasonline">
        <div class='container'>
          <div class='heading_container heading_center'>
            <h2>MEET NINJA'S ONLINE </h2>

          </div>
          <div class='row'>
            <div class='col-md-4 col-sm-6 mx-auto '>
            <div className={styles.box}>
                <div className={styles.ninjacontainer}>
                  <img src={ninja1} alt='ninja-1' className={styles.image} />
                
                <div className={styles.overlay}>
                <div className={styles.text}>
                  <h5>Design Dynamo</h5>
                  <h6><b>Pixel Ninja</b></h6>
                  <p>
                  Our design expert who turns visions into stunning visual masterpieces.
                  </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-4 col-sm-6 mx-auto '>
            <div className={styles.box}>
              <div className={styles.ninjacontainer}>
                  <img src={ninja2} alt='ninja-2' className={styles.image} />
                  <div className={styles.overlay}>
                <div className={styles.text}>
                  <h5><b>Animation Alchemist</b></h5>
                  <h6>Motion Ninja</h6>
                  <p>The animation specialist who brings still images to life with captivating animations and design.</p>
                     </div>
                </div>
                 
                </div>
                
              </div>
            </div>
            <div class='col-md-4 col-sm-6 mx-auto '>
              <div className={styles.box}>
              <div className={styles.ninjacontainer}>
                  <img src={ninja3} className={styles.image} alt="ninja-3" width="200px" />
                
                  <div className={styles.overlay}>
                <div className={styles.text}>
                  <h5>Social Sorcerer</h5>
                  <h6><b>Engagement Ninja</b></h6>
                  <p>
                  Our social media expert who uses strategic techniques to engage and enchant your audience.

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
