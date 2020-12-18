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
       <img src="https://media.giphy.com/media/JoyU4vuzwj6ZA7Ging/giphy.gif"/>
      </div>
       )
}

  

export default LoginSwiper;