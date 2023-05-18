import React, { useEffect, useState } from 'react';
import Signglegallery from './Signglegallery';

const Gallery = () => {
    const [gallery , setgallery ] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setgallery(data))
    },[])
    // console.log(gallery);
    return (
        <div>
            <h1 className='text-7xl font-semibold pb-28 text-center'>Our Collection</h1>
            <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    gallery?.map(singleGallery => <Signglegallery
                    key={singleGallery._id}
                    singleGallery = {singleGallery}
                    >

                    </Signglegallery> )
                }
            </div>
        </div>
    );
};

export default Gallery;