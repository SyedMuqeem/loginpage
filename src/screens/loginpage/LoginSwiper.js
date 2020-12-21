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


                     {/* <div class="slideshow-container">

                        <div class="mySlides fade">
                          <div class="numbertext">1 / 3</div>
                          <img src="car1.png"style={{width: "100%"}} />
                          <div class="text">Caption Text</div>
                        </div>

                        <div class="mySlides fade">
                          <div class="numbertext">2 / 3</div>
                          <img src="car1.png" style={{width: "100%"}}/>
                          <div class="text">Caption Two</div>
                        </div>

                        <div class="mySlides fade">
                          <div class="numbertext">3 / 3</div>
                          <img src="car1.png"style={{width: "100%"}} />
                          <div class="text">Caption Three</div>
                        </div>

                     </div> */}

      </div>
       )
}

  

export default LoginSwiper;