import React from "react";
import emailjs from "emailjs-com";
import BG_image_02 from "../images/BG_image_02.png";
import styles from "./Main.module.css";

export default function Connect() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ew4pdh",
        "template_0z26zkg",
        e.target,
        "sWeAIcDWouQWLhSxm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function handleSubmit(e) {
    sendEmail(e);
    console.log("submit");
  }

  return (
    <>
      <section className={styles.contact_section} id='myGetInTouch'>
        <div className={styles.contact_bg_box}>
          <div className={styles.imgBox}>
            <img src={BG_image_02} alt='' />
          </div>
        </div>
        <div class='container'>
          <div
            className={styles.contact_form_display}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={styles.heading_container}>
              <h2>GET IN TOUCH</h2>
            </div>
            {/* </div> */}
            <div class=''>
              <div class='row'>
                {/* <div class='col-md-7 mx-auto'> */}
                  <form>
                    <div>
                      <div className={styles.contact_form_container}>
                        <label>
                          Enter your Full name
                          <input
                            type='text'
                            placeholder='Full Name'
                            class='form-control'
                          />
                        </label>
                        <label>
                          Enter your email
                          <input type='email' placeholder='Email ' />
                        </label>

                        <label>
                          Enter your contact number
                          <input type='text' placeholder='Phone Number' />
                        </label>
                        <label>
                          Enter your Company Type
                          <input type='text' placeholder='Phone Number' />
                        </label>

                        <label>
                          Detailed description of what you want from us?
                          <textarea
                            class='form-control'
                            type='text'
                            placeholder='Detailed description'
                            aria-label='default input example'
                            rows='8'
                            required
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div className={styles.btnBox}>
                      <button
                        className={styles.ninjaBtns}
                        style={{
                          padding: "6px 40px 6px 40px",
                          marginTop: "20px",
                        }}
                        type='submit'
                      >
                        Send
                      </button>
                    </div>
                  </form>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
