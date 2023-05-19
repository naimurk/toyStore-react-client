import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from "react-router-dom";

const SingleMySpecific = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    const {photo, quantity, price, title, rating, toyname, category} = loadedData;
    return (
        <div className="card p-24 lg:card-side w-full my-40 bg-base-100 shadow-xl">
        <img className='w-1/2 h-96'  src={photo} alt="Album"/>
        <div className="card-body w-1/2">
          <h2 className="card-title text-4xl">{title}</h2>
          <p className='text-2xl font-bold text-warning'> name: {toyname}</p>
          <p> category : {category}</p>
          <p>ratings : {rating}</p>
          <p>quantity : {quantity}</p>

          <p className='text-red-500 font-bold'>price : ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">proceed to Chekout</button>
            <Link to={'/'}><button className="btn btn-warning">Back to shop</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SingleMySpecific;