import React from 'react'
import test from '../assets/test.jpg';
import cta from '../assets/cta-banner.jpg';
import {PiBoatLight, PiRocketLaunchLight, PiTicketLight, PiCallBellLight} from 'react-icons/pi'; 
import {SlActionUndo} from 'react-icons/sl';
import {RiDoubleQuotesL} from 'react-icons/ri';

const services = () => {
  return (
    <div>

    <div class="container">

      <div class="testimonials-box">

        {/* <!--
          - TESTIMONIALS
        --> */}

        <div class="testimonial">

          <h2 class="title">testimonial</h2>

          <div class="testimonial-card">

            <img src={test} alt="alan doe" class="testimonial-banner" width="80" height="80" />

            <p class="testimonial-name">Rajan Sharma</p>

            <p class="testimonial-title">Software Developer</p>

            <div className='flex justify-center'>
            <RiDoubleQuotesL  className='text-violet-600 text-[36px]'/>
            </div>
            <p class="testimonial-desc">
              Dedicated to providing users with one of the best UI/UX experience
            </p>

          </div>

        </div>



        {/* <!--
          - CTA
        --> */}

        <div class="cta-container">

          <img src={cta} alt="summer collection" class="cta-banner" />

          <a href="#" class="cta-content">

            <p class="discount">25% Discount</p>

            <h2 class="cta-title">Summer collection</h2>

            <p class="cta-text">Starting @ $10</p>

            <button class="cta-btn">Shop now</button>

          </a>

        </div>



    {/* services */}

        <div class="service">

          <h2 class="title">Our Services</h2>

          <div class="service-container">

            <a href="#" class="service-item">

              <div class="service-icon">
                <PiBoatLight />
              </div>

              <div class="service-content">

                <h3 class="service-title">Worldwide Delivery</h3>
                <p class="service-desc">For Order Over $100</p>

              </div>

            </a>

            <a href="#" class="service-item">
            
              <div class="service-icon">
                <PiRocketLaunchLight />
              </div>
            
              <div class="service-content">
            
                <h3 class="service-title">Next Day delivery</h3>
                <p class="service-desc">UK Orders Only</p>
            
              </div>
            
            </a>

            <a href="#" class="service-item">
            
              <div class="service-icon">
                <PiCallBellLight />
              </div>
            
              <div class="service-content">
            
                <h3 class="service-title">Best Online Support</h3>
                <p class="service-desc">Hours: 8AM - 11PM</p>
            
              </div>
            
            </a>

            <a href="#" class="service-item">
            
              <div class="service-icon">
                <SlActionUndo />
              </div>
            
              <div class="service-content">
            
                <h3 class="service-title">Return Policy</h3>
                <p class="service-desc">Easy & Free Return</p>
            
              </div>
            
            </a>

            <a href="#" class="service-item">
            
              <div class="service-icon">
                <PiTicketLight />
              </div>
            
              <div class="service-content">
            
                <h3 class="service-title">30% money back</h3>
                <p class="service-desc">For Order Over $100</p>
            
              </div>
            
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

  )
}

export default services
