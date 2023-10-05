import React, { useState } from "react";
import WEBSITE_images_work_1 from '../images/WEBSITE_images_work_1.png';
import styles from './Main.module.css';
import Client_1 from '../images/Client_1.png';
import Client_5 from '../images/Client_5.png';
import Client_4 from '../images/Client_4.png';
import Client_2 from '../images/Client_2.png';
import Client_3 from '../images/Client_3.png';
import Client_6 from '../images/Client_6.png';
import Client_7 from '../images/Client_7.png';
import Client_8 from '../images/Client_8.png';
import Client_9 from '../images/Client_9.png';

export default function Clients() {

const [currentClient, setCurrentClient] = useState(0);

  const clients = [
    Client_1,
    Client_5,
    Client_4,
    Client_2,
    Client_3,
    Client_6,
    Client_7,
    Client_8,
    Client_9,

    // Add more client images here
  ];

  const nextClient = () => {
        setCurrentClient((currentClient + 1) % clients.length);
      };
    
      const prevClient = () => {
        setCurrentClient((currentClient - 1 + clients.length) % clients.length);
      };
  return (
    <>
       <section className={styles.work_section} id="myWork">
       <div
      id='carouselExampleControls'
      class='carousel slide'
      data-ride='carousel'
    >
        <div class='container'>
          <div className={styles.workNinja}>
          <div className={styles.heading_container} >
            <h2><b>Our Clients</b></h2>
          </div>
          <div class='row'>
            <div class='col-md-4'>
              <div className ={styles.box}>
                <div className={styles.imgBox}>
                <img src={clients[currentClient]} alt='' width='200px' />
                  
                </div>
              </div>
            </div>
            <div class='col-md-4'>
            <div className ={styles.box}>
                <div className={styles.imgBox}>
                <img src={clients[currentClient]} alt='' width='200px' />
                  
                </div>
              </div>
            </div>
            <div class='col-md-4'>
            <div className ={styles.box}>
                <div className={styles.imgBox}>
                <img src={clients[currentClient]} alt='' width='200px' />
                </div>
              </div>
          </div>
            </div>
          </div>
        </div>
        <div className={styles.carousel_btn_box}>
        <a
        class='carousel-control-prev'
          className={styles.carousel_control_prev}
          
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <i class='fa fa-arrow-left' aria-hidden='true'></i>
          <span class='sr-only'>Previous</span>
        </a>
        <a
        class='carousel-control-next'
          className={styles.carousel_control_next}
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <i class="fa fa-arrow-right" aria-hidden='true'></i>
          <span class='sr-only'>Next</span>
        </a>
      </div>
        </div>
      </section>
    </>
  );
}


// import React, { useState } from "react";
// import WEBSITE_images_work_1 from '../images/WEBSITE_images_work_1.png';
// import styles from './Main.module.css';
// import Client_1 from '../images/Client_1.png';
// import Client_5 from '../images/Client_5.png';
// import Client_4 from '../images/Client_4.png';
// import Client_2 from '../images/Client_2.png';
// import Client_3 from '../images/Client_3.png';
// import Client_6 from '../images/Client_6.png';
// import Client_7 from '../images/Client_7.png';
// import Client_8 from '../images/Client_8.png';
// import Client_9 from '../images/Client_9.png';

// export default function Clients() {
//   const [currentClient, setCurrentClient] = useState(0);

//   const clients = [
//     Client_1,
//     Client_5,
//     Client_4,
//     Client_2,
//     Client_3,
//     Client_6,
//     Client_7,
//     Client_8,
//     Client_9,

//     // Add more client images here
//   ];

//   const nextClient = () => {
//     setCurrentClient((currentClient + 1) % clients.length);
//   };

//   const prevClient = () => {
//     setCurrentClient((currentClient - 1 + clients.length) % clients.length);
//   };

//   return (
//     <>
//       <section className={styles.work_section} id="myWork">
//         <div className="container">
//           <div className={styles.workNinja}>
//             <div className={styles.heading_container}>
//               <h2><b>Our Clients</b></h2>
//             </div>
//             <div className="row">
//               <div className="col-md-4">
//                 <div className={styles.box}>
//                   <div className={styles.imgBox}>
//                     <img src={clients[currentClient]} alt='' width='200px' />
//                   </div>
//                 </div>
//               </div>
//               {/* Add more client divs as needed */}
//             </div>
//             <div className={styles.buttonContainer}>
//               <button onClick={prevClient} className={styles.prevButton}>
//                 Previous
//               </button>
//               <button onClick={nextClient} className={styles.nextButton}>
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


