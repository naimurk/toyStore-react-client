import React from 'react';
import './Banner.css'
import img from '../../assets/img/banner/mulyadi-MO7HNbW1Mew-unsplash.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img} className="w-full h-3/4" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-3/4  transform  left-0 right-0 top-0 ">
          <div className='pt-96 w-1/2 px-10'>
              <h1 className=' text-white text-7xl font-semibold'>Embrace the Power of Action Figures Journey! </h1>
            <p className=' py-6 text-white'>Prepare to unlock a thrilling universe where every action figure tells a unique story. Whether you're a seasoned collector or a passionate enthusiast, our website offers an unrivaled experience filled with excitement and discovery. Immerse yourself in the intricacies of each character, their rich backstories, and the profound impact they've had on pop culture.</p>
            <button className="btn btn-warning px-12 py-5">Explore</button>
            </div>
            
        </div>
      </div>

    </div>
  );
};

export default Banner;