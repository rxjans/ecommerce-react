import React from 'react'
import {BiCurrentLocation, BiPhoneCall, BiMailSend} from 'react-icons/bi';
import payment from '../assets/payment.png';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const footer = () => {
  return (
  <footer>


    <motion.div
    variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount:0.7}}
     class="footer-nav">

      <div class="container">

        <ul class="footer-nav-list">

          <li class="footer-nav-item">
            <h2 class="nav-title">Popular Categories</h2>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Fashion</a>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Electronic</a>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Cosmetic</a>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Health</a>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Watches</a>
          </li>

        </ul>

        <ul class="footer-nav-list">
        
          <li class="footer-nav-item">
            <h2 class="nav-title">Products</h2>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Prices drop</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">New products</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Best sales</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Contact us</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Sitemap</a>
          </li>
        
        </ul>

        <ul class="footer-nav-list">
        
          <li class="footer-nav-item">
            <h2 class="nav-title">About Me</h2>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">LinkedIn</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Instagram</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Facebook</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">GitHub</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Portfolio</a>
          </li>
        
        </ul>

        <ul class="footer-nav-list">
        
          <li class="footer-nav-item">
            <h2 class="nav-title">Services</h2>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Prices drop</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">New products</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Best sales</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Contact us</a>
          </li>
        
          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">Sitemap</a>
          </li>
        
        </ul>

        <ul class="footer-nav-list">

          <li class="footer-nav-item">
            <h2 class="nav-title">Contact</h2>
          </li>

          <li class="footer-nav-item flex">
            <div className="icon-box mt-1">
              <BiCurrentLocation />
            </div>

            <address class="content">
              Ambala, Haryana
            </address>
          </li>

          <li class="footer-nav-item flex">
            <div className="icon-box mt-1">
            <BiPhoneCall />
            </div>

            <a href="tel:+607936-8058" class="footer-nav-link">+91 8396866977</a>
          </li>

          <li class="footer-nav-item flex">
            <div class="icon-box mt-1">
              <BiMailSend />
            </div>

            <a href="mailto:rajan4.sharma2001@gmail.com" class="footer-nav-link">Contact me</a>
          </li>

        </ul>

        <ul class="footer-nav-list">



        </ul>

      </div>

    </motion.div>

    <div class="footer-bottom">

      <div class="container">

        <img src={payment} alt="payment method" class="payment-img" />

        <p class="copyright">
          Copyright &copy; <a href="#">RS</a> all rights reserved.
        </p>

      </div>

    </div>

  </footer>
    
  )
}

export default footer
