import React from "react";
import logo02 from "../images/logo02.png";
import styles from './Main.module.css';

export default function Footer() {
  return (
    <>
      <section className={styles.info_section }>
        <div class='container'>
          <div class='row'>
            <div class='col-md-3'>
              <div class='info_logo'>
                <a class='navbar-brand' href='index.html'>
                  {/* <span>Guarder</span> */}
                  <img src={logo02} alt='logo-02' width='250px' height='150px' />
                </a>
                {/* <p>
                  dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                  veniam, quisdotempor incididunt r
                </p> */}
              </div>
            </div>
            <div class='col-md-3'>
              <div className={styles.info_links}>
                <h5>About US</h5>
                <p>Infused with a blend of creativity, innovation, and strategic mastery, we transmute ideas into 
                  extraordinary visual tapestries. Join forces with Ninja Space, your creative partner in forging an 
                  indomitable brand presence across all dimensions. Step into the realm of endless possibilities and 
                  unlock the magic with Ninja Space today!

</p>
                {/* <ul>
                  <li>
                    <a href=''>dolor sit amet, consectetur</a>
                  </li>
                  <li>
                    <a href=''>magna aliqua. Ut enim ad</a>
                  </li>
                  <li>
                    <a href=''>minim veniam,</a>
                  </li>
                  <li>
                    <a href=''>quisdotempor incididunt r</a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div class='col-md-3'>
              <div className={styles.info_info}>
                <h5>QUICK ACCESS</h5>
              </div>
              
            </div>
            <div class='col-md-3'>
              <div className={styles.info_form }>
                <h5>GET IN TOUCH</h5>
                {/* <form action='#'>
                  <input type='email' placeholder='Enter your email' />
                  <button>Subscribe</button>
                </form> */}
                <div className={styles.info_contact}>
                {/* <a href='' class=''>
                  <i class='fa fa-map-marker' aria-hidden='true'></i>
                  <span>Lorem ipsum dolor sit amet,</span>
                </a> */}
                <a href='' class=''>
                  <i class='fa fa-phone' aria-hidden='true'></i>
                  <span>Call : +92 310 6955277</span>
                </a>
                <a href='' class=''>
                  <i class='fa fa-envelope' aria-hidden='true'></i>
                  <span>Email: ninjaspace.design@gmail.com</span>
                </a>
              </div>
                <div className={styles.social_box}>
                  <a href='https://www.facebook.com/people/Ninja-Space/100092543247847/'>
                    <i class='fa fa-facebook' aria-hidden='true'></i>
                  </a>
                  <a href='https://twitter.com/NinjaspAAce'>
                    <i class='fa fa-twitter' aria-hidden='true'></i>
                  </a>
                  <a href='https://www.youtube.com/@NinjaSp-Ace'>
                    <i class='fa fa-youtube' aria-hidden='true'></i>
                  </a>
                  <a href='https://www.instagram.com/ninjaspace.design/'>
                    <i class='fa fa-instagram' aria-hidden='true'></i>
                  </a>
                  <a href='https://www.pinterest.com/ninjaspacedesign/'>
                    <i class='fa fa-pinterest' aria-hidden='true'></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ninja-space-designs-231456278/">
                    <i class='fa fa-linkedin' aria-hidden='true'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
