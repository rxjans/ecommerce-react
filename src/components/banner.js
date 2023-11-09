import React from 'react'
import banner from "../assets/banner-1.jpg"
import banner2 from "../assets/banner-2.jpg"
import banner3 from "../assets/banner-3.jpg"

const Banner = () => {
  return (
    <div class="banner" className='mt-2'>

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

    </div>
  )
}

export default Banner
