import React from "react";
import banner2 from "../images/banner2.png";
import styles from './Main.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Home() {
  return (
    <>
      <div className={styles.hero_area}>
        <div className={styles.hero_bg_box}>
          <div className='img-box'>
            <img src={banner2} alt='' />
          </div>
        </div>

        <section className={styles.slider_section} id="myHome">
                <div class='container'>
                  <div className='row'>
                    <div class='col-md-12'>
                      <div className={styles.detailBox} style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                        <h1>
                          <b>Designing Tomorrow,</b> Today
                          <br />
                          <h3>
                            Your Vision, <b>Our Expertise</b>
                          </h3>
                        </h1>
                        <div className= {styles.btnBox}>
                        <Link to="meetNinjasonline" offset={-200}>
                  
                          <button className={styles.ninjaBtns} >
                            {" "}
                            Meet Ninjas Online
                          </button>
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </section>
             
          </div>
          </>
          )
  }