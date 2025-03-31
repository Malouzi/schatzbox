import React from 'react';
import Slider from 'react-slick';
import styles from './Slideshow.module.css';
import HeaderVar1 from '../../assets/Header-var1.jpg';
import HeaderVar3 from '../../assets/Header-var3.jpg';
import HeaderVar4 from '../../assets/Header-var4.jpg';
import { SocialIcon } from 'react-social-icons'; // Importiere SocialIcon

export default function Slideshow() {
  const images = [HeaderVar1, HeaderVar3, HeaderVar4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
    customPaging: () => (
      <div className={styles.customDot}></div>
    ),
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.iconContainer}>
        {/* Social Media Icons in Weiß */}
        <SocialIcon url="https://www.facebook.com" className={styles.icon} network="facebook" fgColor="white" />
        <SocialIcon url="https://www.instagram.com" className={styles.icon} network="instagram" fgColor="white" />
        <SocialIcon url="https://www.tiktok.com" className={styles.icon} network="tiktok" fgColor="white" />
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index}`} className={styles.sliderImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
}




// import React from 'react';
// import Slider from 'react-slick';
// import styles from './Slideshow.module.css';
// import HeaderVar1 from '../../assets/Header-var1.jpg';
// import HeaderVar3 from '../../assets/Header-var3.jpg';
// import HeaderVar4 from '../../assets/Header-var4.jpg';

// export default function Slideshow() {
//   const images = [HeaderVar1, HeaderVar3, HeaderVar4];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//     arrows: false,
//     pauseOnHover: true,
//     customPaging: () => (
//       <div className={styles.customDot}></div>
//     ),
//   };

//   return (
//     <div className={styles.sliderContainer}>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className={styles.slide}>
//             <img src={image} alt={`Slide ${index}`} className={styles.sliderImage} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
