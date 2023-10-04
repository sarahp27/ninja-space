import React from "react";
import emailjs from "emailjs-com";
import BG_image_02 from '../images/BG_image_02.png';
import styles from './Main.module.css'

export default function Connect() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_6ew4pdh", "template_0z26zkg", e.target, "sWeAIcDWouQWLhSxm")
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
    console.log("submit")
  }

  return (
    <>

<section class="contact_section layout_padding" id='myGetInTouch'>
    <div class="contact_bg_box" >
      <div class="img-box">
        <img src={BG_image_02} alt=""/>
      </div>
    </div>
    <div class="container" >
    <div className= 'contact_form_display'
    style={{padding:"20px" ,display: 'flex', flexDirection:'column', alignItems:'center'}}>
      <div class="heading_container heading_center" >
        <h2>
          Get In touch
        </h2>
      </div>
      {/* </div> */}
      <div class="">
        <div class="row">
          <div class="col-md-7 mx-auto">
              <form>
            <div action="#">
              <div class="contact_form-container">
                  <label>
                    Enter your Full name
                    <input type="text" placeholder="Full Name" />
                  </label>
                  <label>
                    Enter your email
                    <input type="email" placeholder="Email " />
                    </label>

                  <label>
                    Enter your contact number
                    <input type="text" placeholder="Phone Number" />
                  </label>
                 <label>
                    <input type="text" placeholder="Message" />
                  </label> 
                  
                
              Detailed description of what you want from us?
              <textarea
                class='form-control'
                type='text'
                placeholder='Detailed description'
                aria-label='default input example'
                rows='8'
                required></textarea>
          </div>
           </div>
                  <div class="btn-box ">
                    <button className = 'ninja-btns' type="submit">
                      Send 
                    </button>
                </div>
            </form>
             </div>
             </div>
            
             </div>
            
          </div>
      </div>
    {/* </div> */}
  
  </section>

      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
          <div class='mb-3'>
            <label>
              <b>First Name</b>
              <input
                class='form-control'
                type='text'
                placeholder='Enter your first name'
                aria-label='default input example'
                required
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              />
            </label>
          </div>
          <div class='mb-2'>
            <label>
              <b>Last Name</b>
              <input
                class='form-control'
                type='text'
                placeholder='Enter your last name'
                aria-label='default input example'
                required
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              />
            </label>
          </div>
          <div class='mb-3'>
            <label>
              <b>Email</b>
              <input
                class='form-control'
                type='email'
                placeholder='Enter your email to connect with you'
                aria-label='default input example'
                required
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              />
            </label>
          </div>
          <div class='mb-3'>
            <label>
              <b>Phone Number</b>
              <input
                class='form-control'
                type='text'
                placeholder='Enter your phone number'
                aria-label='default input example'
                required
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              />
            </label>
          </div>
          <div class='mb-3'>
            <label>
              <b>Company type</b>
              <select class='form-select' aria-label='Default select example' required>
                <option selected>Select</option>
                <option value='1'>IT</option>
                <option value='2'>product Company</option>
                <option value='3'>health sector</option>
              </select>
            </label>
          </div>
          <div class='mb-3'>
            <label>
              <b>Company Name</b>
              <input
                class='form-control'
                type='text'
                placeholder='Enter your company name'
                required
                aria-label='default input example'
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              />
            </label>
          </div>
          <div class='mb-3'>
            <label>
              <b>Detailed description of what you want from us?</b>
              <textarea
                class='form-control'
                type='text'
                placeholder='Detailed description'
                aria-label='default input example'
                rows='8'
                required
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              />
            </label>
          </div>

        <div class='mb-3'>
          <button class='btn btn-primary' type='submit' value='send'>
            Submit form
          </button>
        </div>
        </form>
      </div> */}
    </>
  );
}
