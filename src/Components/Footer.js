import React from "react";
import logo02 from "../images/logo02.png";

export default function Footer() {
  return (
    <>
      <div>
        <div class='container text-center'>
          {/* <div style={{display:'flex', flexDirection:'row'}}> */}
          <div class='row'>
            <div class='col-md-6'>
              <img src={logo02} alt='logo-02' width='450px' height='250px' />
            </div>
            <div class='col-md-6' style={{ color: "black" }}>
              <div class='row'>
                <div class='col-md-3'>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <h5>QUICK</h5>
                      <h5>
                        <b> ACCESS</b>
                      </h5>
                    </li>
                    <li>
                      {" "}
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        How to Book
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Our Work
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Our Clients
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Team Ninjas
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                {/* </div> */}

                <div class='col-md-3'>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <h5>GET IN</h5>
                      <h5>
                        <b> TOUCH</b>
                      </h5>
                    </li>
                    <li>
                      {" "}
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {" "}
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
