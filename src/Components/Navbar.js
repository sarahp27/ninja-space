import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import logo01 from "../images/logo01.png";
import styles from "./Main.module.css";

export default function Navbar() {
  function toPortfolio() {
    // window.location.href =
    //   "https://www.behance.net/ninjaspace_design?tracking_source=search_users|ninja%20space";
    window.open('https://www.behance.net/ninjaspace_design?tracking_source=search_users|ninja%20space', "_blank")
  }

  return (
    <div className='Navbar-container'>
      <nav
        className='navbar navbar-expand-lg navbar-dark fixed-top'
        style={{ backgroundColor: "#272466", cursor:'pointer' }}
      >
        <div className='container-fluid'>
          <img src={logo01} alt='logo-ninja' width='150px' height='auto' />
          {/* <div className="navbar-brand">Ninja Space</div> */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="myHome" offset={-100} className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  aria-current='page'
                  to='myWork'
                  spy={true}
                  offset={-100} // Adjust the offset as needed
                  duration={600}>
                  Our Work
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='myServices' offset={-200}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='myClients' offset={-200}>
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav' style={{ display: "flex", gap: "10px" }}>
              {/* Add the buttons inside the toggle menu */}
              <li className='nav-item'>
                <button 
                 className={styles.ninjaBtns}
                 onClick={toPortfolio}>
                  Portfolio
                </button>
              </li>
              <li className='nav-item'>
                
                <button
                  className={styles.ninjaBtns}
                >
                  Request a Meeting
                </button>
                
              </li>
              <li className='nav-item'>
              <Link to="myGetInTouch" offset={-200}>
                <button className={styles.ninjaBtns} >
                <i class="fa fa-envelope">
                    </i>
                  Get in Touch</button>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
