import React from "react"
import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});



const LoginSwiper = () => {

  
    return(
      <div>
       <img src="car1.png"/>
      </div>
       )
}

  

export default LoginSwiper;