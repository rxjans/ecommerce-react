import React from 'react'
import bag from '../assets/icons/bag.svg';
import coat from '../assets/icons/coat.svg';
import cosmetics from '../assets/icons/cosmetics.svg';
import dress from '../assets/icons/dress.svg';
import glasses from '../assets/icons/glasses.svg';
import hat from '../assets/icons/hat.svg';
import jacket from '../assets/icons/jacket.svg';
import jewelry from '../assets/icons/jewelry.svg';
import perfume from '../assets/icons/perfume.svg';
import quotes from '../assets/icons/quotes.svg';
import shoes from '../assets/icons/shoes.svg';
import shorts from '../assets/icons/shorts.svg';
import tee from '../assets/icons/tee.svg';
import watch from '../assets/icons/watch.svg';

const Category = () => {
  return (
    <div class="category" className='mt-12 mb-12'>

    <div className="container">

      <div className="grid grid-cols-4 gap-4 has-scrollbar">

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={dress} alt="dress & frock" />
          </div>

          <div class="category-content-box ">

            <div className="category-content-flex">
              <h2 className='text-black group-hover:text-white text-[18px]'>Dress & frock</h2>

              <p class="category-item-amount">(53)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={coat} alt="winter wear" />
          </div>

          <div class="category-content-box">

            <div class="category-content-flex">
            <h2 className='text-black group-hover:text-white text-[18px]'>Coats</h2>

              <p class="category-item-amount">(58)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={glasses} alt="glasses & lens" />
          </div>

          <div class="category-content-box">

            <div class="category-content-flex">
            <h2 className='text-black group-hover:text-white text-[18px]'>Glasses & lens</h2>

              <p class="category-item-amount">(68)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={shorts} alt="shorts & jeans" />
          </div>

          <div class="category-content-box">

            <div class="category-content-flex">
            <h2 className='text-black group-hover:text-white text-[18px]'>Shorts & jeans</h2>

              <p class="category-item-amount">(84)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={tee} alt="t-shirts" />
          </div>

          <div class="category-content-box">

            <div class="category-content-flex">
            <h2 className='text-black group-hover:text-white text-[18px]'>T-shirts</h2>

              <p class="category-item-amount">(35)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={jacket} alt="jacket" />
          </div>

          <div class="category-content-box">

            <div class="category-content-flex">
            <h2 className='text-black group-hover:text-white text-[18px]'>Jacket</h2>

              <p class="category-item-amount">(16)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={watch} alt="watch" />
          </div>

          <div class="category-content-box">

            <div class="category-content-flex">
            <h2 className='text-black group-hover:text-white text-[18px]'>Watch</h2>

              <p class="category-item-amount">(27)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

        <div class="category-item hover:bg-violet-300 group">

          <div className='w-[120px]'>
            <img className='btn' src={hat} alt="hat & caps" />
          </div>

          <div class="category-content-box">

            <div class="category-content-flex">
            <h2 className='text-black group-hover:text-white text-[18px]'>HAT & CAPS</h2>

              <p class="category-item-amount">(39)</p>
            </div>

            <a href="#" class="category-btn"><b className='text-violet-400'>Show all</b></a>

          </div>

        </div>

      </div>

    </div>

  </div>

  )
}

export default Category
