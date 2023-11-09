import React from 'react'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import jacket6 from '../assets/products/jacket-6.jpg';
import jacket5 from '../assets/products/jacket-5.jpg';
import jacket4 from '../assets/products/jacket-4.jpg';
import jacket3 from '../assets/products/jacket-3.jpg';
import jacket2 from '../assets/products/jacket-2.jpg';
import jacket1 from '../assets/products/jacket-1.jpg';
import watch4 from '../assets/products/watch-4.jpg';
import watch3 from '../assets/products/watch-3.jpg';
import watch2 from '../assets/products/watch-2.jpg';
import watch1 from '../assets/products/watch-1.jpg';
import sports6 from '../assets/products/sports-6.jpg';
import sports5 from '../assets/products/sports-5.jpg';
import sports4 from '../assets/products/sports-4.jpg';
import sports3 from '../assets/products/sports-3.jpg';
import sports2 from '../assets/products/sports-2.jpg';
import sports1 from '../assets/products/sports-1.jpg';
import shorts2 from '../assets/products/shorts-2.jpg';
import shorts1 from '../assets/products/shorts-1.jpg';
import shoe5 from '../assets/products/shoe-5.jpg';
import shoe4 from '../assets/products/shoe-4.jpg';
import shoe3 from '../assets/products/shoe-3.jpg';
import shoe2 from '../assets/products/shoe-2.jpg';
import shoe1 from '../assets/products/shoe-1.jpg';
import shoe2_1 from '../assets/products/shoe-2_1.jpg';
import shoe1_1 from '../assets/products/shoe-1_1.jpg';
import shirt2 from '../assets/products/shirt-2.jpg';
import shirt1 from '../assets/products/shirt-1.jpg';
import shampoo from '../assets/products/shampoo.jpg';
import perfume from '../assets/products/perfume.jpg';
import party2 from '../assets/products/party-wear-2.jpg';
import party1 from '../assets/products/party-wear-1.jpg';
import jewel3 from '../assets/products/jewellery-3.jpg';
import jewel2 from '../assets/products/jewellery-2.jpg';
import jewel1 from '../assets/products/jewellery-1.jpg';
import clothes4 from '../assets/products/clothes-4.jpg';
import clothes3 from '../assets/products/clothes-3.jpg';
import clothes2 from '../assets/products/clothes-2.jpg';
import clothes1 from '../assets/products/clothes-1.jpg';
import d from '../assets/products/4.jpg';
import c from '../assets/products/3.jpg';
import b from '../assets/products/2.jpg';
import a from '../assets/products/1.jpg';
import belt from '../assets/products/belt.jpg';
import dress from '../assets/icons/dress.svg';
import shoes from '../assets/icons/shoes.svg';
import jewelery from '../assets/icons/jewelry.svg';
import perfumes from '../assets/icons/perfume.svg';
import cosmetics from '../assets/icons//cosmetics.svg';
import glasses from '../assets/icons/glasses.svg';
import bag from '../assets/icons/bag.svg';
// dress shoes jewelry shoes perfumes cosmetics glasses bag
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Products = () => {
  return (
    
    <div class="product-container">

      <div class="container">

{/* 
        <!--
          - SIDEBAR
        --> */}

        <motion.div
        variants={fadeIn('right',0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.7}}
         class="sidebar  has-scrollbar" data-mobile-menu>

          <div class="sidebar-category">

            <div class="sidebar-top">
              <h2 class="sidebar-title">Category</h2>

              <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul class="sidebar-menu-category-list">

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src={dress} alt="clothes" width="20" height="20"
                      class="menu-title-img" />

                    <p class="menu-title">Clothes</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Shirt</p>
                      <data value="300" class="stock" title="Available Stock">300</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">shorts & jeans</p>
                      <data value="60" class="stock" title="Available Stock">60</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">jacket</p>
                      <data value="50" class="stock" title="Available Stock">50</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">dress & frock</p>
                      <data value="87" class="stock" title="Available Stock">87</data>
                    </a>
                  </li>

                </ul>

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src={shoes} alt="footwear" class="menu-title-img" width="20"
                      height="20" />

                    <p class="menu-title">Footwear</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Sports</p>
                      <data value="45" class="stock" title="Available Stock">45</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Formal</p>
                      <data value="75" class="stock" title="Available Stock">75</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Casual</p>
                      <data value="35" class="stock" title="Available Stock">35</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Safety Shoes</p>
                      <data value="26" class="stock" title="Available Stock">26</data>
                    </a>
                  </li>

                </ul>

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src={jewelery} alt="clothes" class="menu-title-img" width="20"
                      height="20" />

                    <p class="menu-title">Jewelry</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Earrings</p>
                      <data value="46" class="stock" title="Available Stock">46</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Couple Rings</p>
                      <data value="73" class="stock" title="Available Stock">73</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Necklace</p>
                      <data value="61" class="stock" title="Available Stock">61</data>
                    </a>
                  </li>

                </ul>

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src={perfumes} alt="perfume" class="menu-title-img" width="20"
                      height="20" />

                    <p class="menu-title">Perfume</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>
                
                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Clothes Perfume</p>
                      <data value="12" class="stock" title="Available Stock">12 pcs</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Deodorant</p>
                      <data value="60" class="stock" title="Available Stock">60 pcs</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">jacket</p>
                      <data value="50" class="stock" title="Available Stock">50 pcs</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">dress & frock</p>
                      <data value="87" class="stock" title="Available Stock">87 pcs</data>
                    </a>
                  </li>

                </ul>

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>
                
                  <div class="menu-title-flex">
                    <img src={cosmetics} alt="cosmetics" class="menu-title-img" width="20"
                      height="20" />

                    <p class="menu-title">Cosmetics</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Shampoo</p>
                      <data value="68" class="stock" title="Available Stock">68</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Sunscreen</p>
                      <data value="46" class="stock" title="Available Stock">46</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Body Wash</p>
                      <data value="79" class="stock" title="Available Stock">79</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Makeup Kit</p>
                      <data value="23" class="stock" title="Available Stock">23</data>
                    </a>
                  </li>

                </ul>

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src={glasses} alt="glasses" class="menu-title-img" width="20"
                      height="20" />

                    <p class="menu-title">Glasses</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Sunglasses</p>
                      <data value="50" class="stock" title="Available Stock">50</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Lenses</p>
                      <data value="48" class="stock" title="Available Stock">48</data>
                    </a>
                  </li>

                </ul>

              </li>
              
              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src={bag} alt="bags" class="menu-title-img" width="20" height="20" />

                    <p class="menu-title">Bags</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Shopping Bag</p>
                      <data value="62" class="stock" title="Available Stock">62</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Gym Backpack</p>
                      <data value="35" class="stock" title="Available Stock">35</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Purse</p>
                      <data value="80" class="stock" title="Available Stock">80</data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="#" class="sidebar-submenu-title">
                      <p class="product-name">Wallet</p>
                      <data value="75" class="stock" title="Available Stock">75</data>
                    </a>
                  </li>

                </ul>

              </li>

            </ul>

          </div>

          <div class="product-showcase">

            <h3 class="showcase-heading">best sellers</h3>

            <div class="showcase-wrapper">

              <div class="showcase-container">

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={a} alt="baby fabric shoes" width="75" height="75"
                      class="showcase-img" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">baby fabric shoes</h4>
                    </a>

                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$5.00</del>
                      <p class="price">$4.00</p>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={b} alt="men's hoodies t-shirt" class="showcase-img"
                      width="75" height="75" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">men's hoodies t-shirt</h4>
                    </a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$17.00</del>
                      <p class="price">$7.00</p>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={c} alt="girls t-shirt" class="showcase-img" width="75"
                      height="75" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">girls t-shirt</h4>
                    </a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$5.00</del>
                      <p class="price">$3.00</p>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={d} alt="woolen hat for men" class="showcase-img" width="75"
                      height="75" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">woolen hat for men</h4>
                    </a>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$15.00</del>
                      <p class="price">$12.00</p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>



        <div class="product-box">

          {/* <!--
            - PRODUCT MINIMAL
          --> */}

          <div class="product-minimal">

            <div class="product-showcase">

              <h2 class="title">New Arrivals</h2>

              <div class="showcase-wrapper has-scrollbar">

                <div class="showcase-container">

                  <div class="showcase">

                    <a href="#" class="showcase-img-box">
                      <img src={clothes1} alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img" />
                    </a>

                    <div class="showcase-content">

                      <a href="#">
                        <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                      </a>

                      <a href="#" class="showcase-category">Clothes</a>

                      <div class="price-box">
                        <p class="price">₹599</p>
                        <del>₹1300</del>
                      </div>

                    </div>

                  </div>

                  <div class="showcase">
                  
                    <a href="#" class="showcase-img-box">
                      <img src={clothes2} alt="girls pink embro design top" class="showcase-img" width="70" />
                    </a>
                  
                    <div class="showcase-content">
                  
                      <a href="#">
                        <h4 class="showcase-title">Girls pnk Embro design Top</h4>
                      </a>
                  
                      <a href="#" class="showcase-category">Clothes</a>
                  
                      <div class="price-box">
                        <p class="price">₹2300</p>
                        <del>₹5300</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <a href="#" class="showcase-img-box">
                      <img src={clothes3} alt="black floral wrap midi skirt" class="showcase-img"
                        width="70" />
                    </a>
                  
                    <div class="showcase-content">
                  
                      <a href="#">
                        <h4 class="showcase-title">Black Floral Wrap Midi Skirt</h4>
                      </a>
                  
                      <a href="#" class="showcase-category">Clothes</a>
                  
                      <div class="price-box">
                        <p class="price">₹999</p>
                        <del>₹1300</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <a href="#" class="showcase-img-box">
                      <img src={shirt1} alt="pure garment dyed cotton shirt" class="showcase-img"
                        width="70" />
                    </a>
                  
                    <div class="showcase-content">
                  
                      <a href="#">
                        <h4 class="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                      </a>
                  
                      <a href="#" class="showcase-category">Mens Fashion</a>
                  
                      <div class="price-box">
                        <p class="price">₹1300</p>
                        <del>₹2300</del>
                      </div>
                  
                    </div>
                  
                  </div>

                </div>

                <div class="showcase-container">
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src={jacket5} alt="men yarn fleece full-zip jacket" class="showcase-img"
                        width="70" />
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Winter wear</a>
                
                      <div class="price-box">
                        <p class="price">₹1300</p>
                        <del>₹1300</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src={jacket1} alt="mens winter leathers jackets" class="showcase-img"
                        width="70" />
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Winter wear</a>
                
                      <div class="price-box">
                        <p class="price">₹1300</p>
                        <del>₹1300</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src={jacket3} alt="mens winter leathers jackets" class="showcase-img"
                        width="70" />
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Jackets</a>
                
                      <div class="price-box">
                        <p class="price">₹1300</p>
                        <del>₹1300</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src={shorts1} alt="better basics french terry sweatshorts" class="showcase-img"
                        width="70" />
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">Better Basics French Terry Sweatshorts</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Shorts</a>
                
                      <div class="price-box">
                        <p class="price">₹1300</p>
                        <del>₹1300</del>
                      </div>
                
                    </div>
                
                  </div>
                
                </div>

              </div>

            </div>

            <div class="product-showcase">
            
              <h2 class="title">Trending</h2>
            
              <div class="showcase-wrapper  has-scrollbar">
            
                <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={sports1} alt="running & trekking shoes - white" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Running & Trekking Shoes - White</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Sports</a>
            
                      <div class="price-box">
                        <p class="price">₹1199</p>
                        <del>₹2500</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={sports2} alt="trekking & running shoes - black" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Trekking & Running Shoes - black</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Sports</a>
            
                      <div class="price-box">
                        <p class="price">₹1700</p>
                        <del>₹1900</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={party1} alt="womens party wear shoes" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Womens Party Wear Shoes</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Party wear</a>
            
                      <div class="price-box">
                        <p class="price">₹1300</p>
                        <del>₹1600</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={sports3} alt="sports claw women's shoes" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Sports Claw Women's Shoes</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Sports</a>
            
                      <div class="price-box">
                        <p class="price">₹800</p>
                        <del>₹1300</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
                <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={sports6} alt="air tekking shoes - white" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Air Trekking Shoes - white</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Sports</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={shoe3} alt="Boot With Suede Detail" class="showcase-img" width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Boot With Suede Detail</h4>
                      </a>
            
                      <a href="#" class="showcase-category">boots</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={shoe1} alt="men's leather formal wear shoes" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Men's Leather Formal Wear shoes</h4>
                      </a>
            
                      <a href="#" class="showcase-category">formal</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={shoe2} alt="casual men's brown shoes" class="showcase-img" width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Casual Men's Brown shoes</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Casual</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
              </div>
            
            </div>

            <div class="product-showcase">
            
              <h2 class="title">Top Rated</h2>
            
              <div class="showcase-wrapper  has-scrollbar">
            
                <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={watch3} alt="pocket watch leather pouch" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Pocket Watch Leather Pouch</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Watches</a>
            
                      <div class="price-box">
                        <p class="price">₹999</p>
                        <del>₹1999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={jewel3} alt="silver deer heart necklace" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Silver Deer Heart Necklace</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Jewellery</a>
            
                      <div class="price-box">
                        <p class="price">₹699</p>
                        <del>₹999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={perfume} alt="titan 100 ml womens perfume" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Titan 100 Ml Womens Perfume</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Perfume</a>
            
                      <div class="price-box">
                        <p class="price">₹1200</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={belt} alt="men's leather reversible belt" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Men's Leather Reversible Belt</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Belt</a>
            
                      <div class="price-box">
                        <p class="price">₹999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
                <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={jewel2} alt="platinum zircon classic ring" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">platinum Zircon Classic Ring</h4>
                      </a>
            
                      <a href="#" class="showcase-category">jewellery</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={watch1} alt="smart watche vital plus" class="showcase-img" width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Smart watche Vital Plus</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Watches</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={shampoo} alt="shampoo conditioner packs" class="showcase-img"
                        width="70" />
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">shampoo conditioner packs</h4>
                      </a>
            
                      <a href="#" class="showcase-category">cosmetics</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹2999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src={jewel1} alt="rose gold peacock earrings" class="showcase-img"
                        width="70" />
                    </a> 
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Rose Gold Peacock Earrings</h4>
                      </a>
            
                      <a href="#" class="showcase-category">jewellery</a>
            
                      <div class="price-box">
                        <p class="price">₹2999</p>
                        <del>₹1999</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
              </div>
            
            </div>

          </div>



          {/* <!--
            - PRODUCT FEATURED
          --> */}

          <motion.div
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.1}}
           class="product-featured">

            <h2 class="title">Deal of the day</h2>

            <div class="showcase-wrapper has-scrollbar">

              <div class="showcase-container">

                <div class="showcase">
                  
                  <div class="showcase-banner">
                    <img src={shampoo} alt="shampoo, conditioner & facewash packs" class="showcase-img" />
                  </div>

                  <div class="showcase-content">
                    
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <a href="#">
                      <h3 class="showcase-title">shampoo, conditioner & facewash packs</h3>
                    </a>

                    <p class="showcase-desc">
                      Get yourself an amazing bundle of different packs to keep your skin glowing and hair shiny.
                    </p>

                    <div class="price-box">
                      <p class="price">₹1100</p>

                      <del>₹2999</del>
                    </div>

                    <button class="add-cart-btn">add to cart</button>

                    <div class="showcase-status">
                      <div class="wrapper">
                        <p>
                          already sold: <b>20</b>
                        </p>

                        <p>
                          available: <b>40</b>
                        </p>
                      </div>

                      <div class="showcase-status-bar"></div>
                    </div>

                    <div class="countdown-box">

                      <p class="countdown-desc">
                        Hurry Up! Offer ends in:
                      </p>

                      <div class="countdown">

                        <div class="countdown-content">

                          <p class="display-number">5</p>

                          <p class="display-text">Days</p>

                        </div>

                        <div class="countdown-content">
                          <p class="display-number">12</p>
                          <p class="display-text">Hours</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">59</p>
                          <p class="display-text">Min</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">00</p>
                          <p class="display-text">Sec</p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="showcase-container">
              
                <div class="showcase">
              
                  <div class="showcase-banner">
                    <img src={jewel1} alt="Rose Gold diamonds Earring" class="showcase-img" />
                  </div>
              
                  <div class="showcase-content">
              
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>
              
                    <h3 class="showcase-title">
                      <a href="#" class="showcase-title">Rose Gold diamonds Earring</a>
                    </h3>
              
                    <p class="showcase-desc">
                      Lorem ipsum dolor sit amet consectetur Lorem ipsum
                      dolor dolor sit amet consectetur Lorem ipsum dolor
                    </p>
              
                    <div class="price-box">
                      <p class="price">$1990.00</p>
                      <del>$2000.00</del>
                    </div>
              
                    <button class="add-cart-btn">add to cart</button>
              
                    <div class="showcase-status">
                      <div class="wrapper">
                        <p> already sold: <b>15</b> </p>
              
                        <p> available: <b>40</b> </p>
                      </div>
              
                      <div class="showcase-status-bar"></div>
                    </div>
              
                    <div class="countdown-box">
              
                      <p class="countdown-desc">Hurry Up! Offer ends in:</p>
              
                      <div class="countdown">
                        <div class="countdown-content">
                          <p class="display-number">10</p>
                          <p class="display-text">Days</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">9</p>
                          <p class="display-text">Hours</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">59</p>
                          <p class="display-text">Min</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">00</p>
                          <p class="display-text">Sec</p>
                        </div>
                      </div>
              
                    </div>
              
                  </div>
              
                </div>
              
              </div>

            </div>

          </motion.div>



          {/* <!--
            - PRODUCT GRID
          --> */}

          <div class="product-main">

            <h2 class="title">New Products</h2>

            <div class="product-grid">

              <div class="showcase">

                <div class="showcase-banner">

                  <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
                  <img src={jacket4} alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />

                  <p class="showcase-badge">40%+</p>

                  <div class="showcase-actions">

                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>

                  </div>

                </div>

                <div class="showcase-content">

                  <a href="#" class="showcase-category">jacket</a>

                  <a href="#">
                    <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
                  </a>

                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>

                  <div class="price-box">
                    <p class="price">₹1100</p>
                    <del>₹2000</del>
                  </div>

                </div>

              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={shirt1} alt="Pure Garment Dyed Cotton Shirt" class="product-img default"
                    width="300" />
                  <img src={shirt2} alt="Pure Garment Dyed Cotton Shirt" class="product-img hover"
                    width="300" />
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">shirt</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹999</p>
                    <del>₹1300</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={jacket5} alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img default"
                    width="300" />
                  <img src={jacket6} alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img hover"
                    width="300" />
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">Jacket</a>
              
                  <h3>
                    <a href="#" class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹1200</p>
                    <del>₹2500</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={clothes3} alt="Black Floral Wrap Midi Skirt" class="product-img default"
                    width="300" />
                  <img src={clothes4} alt="Black Floral Wrap Midi Skirt" class="product-img hover"
                    width="300" />
              
                  <p class="showcase-badge angle pink">new</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">skirt</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Black Floral Wrap Midi Skirt</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹999</p>
                    <del>₹1100</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={shoe2} alt="Casual Men's Brown shoes" class="product-img default"
                    width="300" />
                  <img src={shoe2_1} alt="Casual Men's Brown shoes" class="product-img hover"
                    width="300" />
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">casual</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Casual Men's Brown shoes</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹1100</p>
                    <del>₹1500</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={watch3} alt="Pocket Watch Leather Pouch" class="product-img default"
                    width="300" />
                  <img src={watch4} alt="Pocket Watch Leather Pouch" class="product-img hover"
                    width="300" />
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">watches</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Pocket Watch Leather Pouch</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹2500</p>
                    <del>₹5000</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={watch1} alt="Smart watche Vital Plus" class="product-img default"
                    width="300" />
                  <img src={watch2} alt="Smart watche Vital Plus" class="product-img hover" width="300" />
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">watches</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Smart watche Vital Plus</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹500</p>
                    <del>₹1800</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={party1} alt="Womens Party Wear Shoes" class="product-img default"
                    width="300" />
                  <img src={party2} alt="Womens Party Wear Shoes" class="product-img hover"
                    width="300" />
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">party wear</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Womens Party Wear Shoes</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹900</p>
                    <del>₹2000</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={jacket1} alt="Mens Winter Leathers Jackets" class="product-img default"
                    width="300" />
                  <img src={jacket2} alt="Mens Winter Leathers Jackets" class="product-img hover"
                    width="300" />
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">jacket</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Mens Winter Leathers Jackets</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹1600</p>
                    <del>₹1900</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={sports2} alt="Trekking & Running Shoes - black" class="product-img default"
                    width="300" />
                  <img src={sports4} alt="Trekking & Running Shoes - black" class="product-img hover"
                    width="300" />
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">sports</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Trekking & Running Shoes - black</a>
                  </h3>
              
                  <div class="showcase-rating">
                  <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹2400</p>
                    <del>₹3200</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={shoe1} alt="Men's Leather Formal Wear shoes" class="product-img default"
                    width="300" />
                  <img src={shoe1_1} alt="Men's Leather Formal Wear shoes" class="product-img hover"
                    width="300" />
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">formal</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Men's Leather Formal Wear shoes</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹1200</p>
                    <del>₹1500</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src={shorts1} alt="Better Basics French Terry Sweatshorts"
                    class="product-img default" width="300" />
                  <img src={shorts2} alt="Better Basics French Terry Sweatshorts"
                    class="product-img hover" width="300" />
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">shorts</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Better Basics French Terry Sweatshorts</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
              
                  <div class="price-box">
                    <p class="price">₹1500</p>
                    <del>₹2309</del>
                  </div>
              
                </div>
              
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>



  )
}

export default Products
