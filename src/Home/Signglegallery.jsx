import React from 'react';

const Signglegallery = ({singleGallery}) => {
    //  console.log(singleGallery);
     const {img} = singleGallery
    return (
        <div data-aos="zoom-in">
            <img className='lg:w-80 w-full h-60 lg:h-80' src={img} alt="" />
        </div>
    );
};

export default Signglegallery;