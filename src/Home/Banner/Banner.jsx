import React from 'react';
import './Banner.css'
import img from '../../assets/img/banner/mulyadi-MO7HNbW1Mew-unsplash.jpg'

const Banner = () => {
  return (
    <div  className="hero   lg:min-h-screen "  style={{ backgroundImage: `url(${img})` }}>
    <div className="hero-overlay  bg-opacity-60"></div>
    <div data-aos="fade-up" className="hero-content  text-center text-neutral-content">
      <div className=" max-w-xl py-12  w-full text-gray-50"   >
        <h1 className="mb-5 text-3xl lg:text-7xl text-gray-50 font-bold"><span className='text-warning'>Embrace</span> the Power of <span className='text-warning'>Action</span> Figures Journey!
</h1>
        <p className="my-5 text-sm">Prepare to unlock a thrilling universe where every action figure tells a unique story. Whether you're a seasoned collector or a passionate enthusiast, our website offers an unrivaled experience filled with excitement and discovery.</p>
        <button className="btn btn-warning">Explore</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;