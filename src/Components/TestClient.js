// import React, { useState } from "react";
// import WEBSITE_images_work_1 from '../images/WEBSITE_images_work_1.png';
// import styles from './Main.module.css';
// import Client_1 from '../images/Client_1.png';
// import Client_5 from '../images/Client_5.png';
// import Client_4 from '../images/Client_4.png';
import Client_2 from '../images/Client_2.png';
import Client_3 from '../images/Client_3.png';
import Client_6 from '../images/Client_6.png';
import Client_7 from '../images/Client_7.png';
import Client_8 from '../images/Client_8.png';
import Client_9 from '../images/Client_9.png';

// export default function TestClient() {

// const [currentClient, setCurrentClient] = useState(0);

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
//        <section className={styles.work_section} id="myWork">
//         <div class='container'>
//           <div className={styles.workNinja}>
//           <div className={styles.heading_container} >
//             <h2><b>Our Clients</b></h2>
//           </div>
        
//           <div class='row'>
//             <div> Previous </div>
//             <div class='col-md-3'>
//               <div className ={styles.box}>
//                 <div className={styles.imgBox}>
//                 <img src={clients[currentClient]} alt='' width='200px' />
                  
//                 </div>
//               </div>
//             </div>
//             <div class='col-md-3'>
//             <div className ={styles.box}>
//                 <div className={styles.imgBox}>
//                 <img src={clients[currentClient]} alt='' width='200px' />
                  
//                 </div>
//               </div>
//             </div>
//             <div class='col-md-3'>
//             <div className ={styles.box}>
//                 <div className={styles.imgBox}>
//                 <img src={clients[currentClient[i]]} alt='' width='200px' />
//                 </div>
//               </div>
//           </div>
//           <div class='col-md-3'>
//           <div> Next </div>
//             <div className ={styles.box}>
              
//                 <div className={styles.imgBox}>
                  
//                 <img src={clients[currentClient+3]} alt='' width='200px' />
//                 </div>
                
//               </div>
              
//           </div>
          
//             </div>
            
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useState } from "react";
import styles from './Main.module.css';
import Client_1 from '../images/Client_1.png';
import Client_5 from '../images/Client_5.png';
import Client_4 from '../images/Client_4.png';
// ... import other client images

export default function TestClient() {
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
        <div className='container'>
          <div className={styles.workNinja}>
            <div className={styles.heading_container}>
              <h2><b>Our Clients</b></h2>
            </div>

            <div className='row'>
              <div className={styles.btns}>

              <div className={styles.prevBtn} onClick={prevClient}><i class="fa fa-arrow-left"></i> </div>
              <div className={styles.nextBtn} onClick={nextClient} >
              <i class="fa fa-arrow-right"></i>
              </div>
              </div>
              <div className='col-md-3'>
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img src={clients[currentClient]} alt='' width='200px' />
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img src={clients[(currentClient + 1) % clients.length]} alt='' width='200px' />
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img src={clients[(currentClient + 2) % clients.length]} alt='' width='200px' />
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img src={clients[(currentClient + 3) % clients.length]} alt='' width='200px' />
                  </div>
                </div>
              </div>
              {/* <div className='col-md-3' onClick={nextClient} >
              <i class="fa fa-arrow-right"></i>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



