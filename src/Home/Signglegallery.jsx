import React from 'react';

const Signglegallery = ({singleGallery}) => {
    //  console.log(singleGallery);
     const {img} = singleGallery
    return (
        <div>
            <img className='w-80 h-80' src={img} alt="" />
        </div>
    );
};

export default Signglegallery;