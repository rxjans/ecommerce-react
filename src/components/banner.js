import React from 'react'
import banner from "../assets/banner-1.jpg"
import banner2 from "../assets/banner-2.jpg"
import banner3 from "../assets/banner-3.jpg"
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';


const Banner = () => {
  return (
    <motion.div
    variants={fadeIn('down',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount:0.7}}
     class="banner" className='mt-2'>

      <div class="container">

        <div class="slider-container has-scrollbar">

          <div class="slider-item">

            <img src={banner} alt="women's latest fashion sale" class="banner-img" />

            <div class="banner-content">

              <p class="banner-subtitle">Trending item</p>

              <h2 class="banner-title">Women's latest fashion sale</h2>

              <p class="banner-text">
                starting at <b>50%</b> off
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>

          <div class="slider-item">

            <img src={banner2} alt="modern sunglasses" class="banner-img" />

            <div class="banner-content">

              <p class="banner-subtitle">Trending accessories</p>

              <h2 class="banner-title">Modern sunglasses</h2>

              <p class="banner-text">
                starting at <b>30%</b> off
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>

          <div class="slider-item">

            <img src={banner3} alt="new fashion summer sale" class="banner-img" />

            <div class="banner-content">

              <p class="banner-subtitle">Sale Offer</p>

              <h2 class="banner-title">New fashion summer sale</h2>

              <p class="banner-text">
                starting at <b>60%</b> off
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default Banner
