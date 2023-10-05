import React from "react";
import xyz from "./Main.module.css";
import emailjs from "emailjs-com";
import formImage from "../images/BG_image_02.png";

export default function Connnect() {
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
    <div>
      <section className={xyz.formsect} id='myGetInTouch'>
      <h3> Get in touch </h3>
        <form className={xyz.myform} onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' name="sender_name" />
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name="sender_email" />
          <label htmlFor='contact'>Contact</label>
          <input id='contact' type='number' name="contact"/>
          <label htmlFor='company'>Company Name</label>
          <input id='company' type='text' />
          <label htmlFor="txtarea">Detailed Description</label>
          <textarea id="txtarea" type="text" name="message" rows="6"></textarea>
          <div className={xyz.btnBox}>
                      <button
                        className={xyz.ninjaBtns}
                        
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

      </section>
    </div>
  );
}
