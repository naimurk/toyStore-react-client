import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider'
import { Link } from "react-router-dom";
import Login from '../Layout/Login';

const SingleToyCard = ({ singleToy }) => {
    const {toyName,title, img, price, quantity , rating , _id} = singleToy
    const {user} = useContext(AuthContex)
    // console.log(price,quantity,_id);
    return (
        <div data-aos="flip-up"> className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-96' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl'>{toyName}</p>
                <p className='font-bold'>price: {price}</p>
                <p className='font-bold'>available quantity: {quantity}</p>
                <p>ratings: {rating}</p>

                <div className="card-actions justify-end">
                    <Link to={user?.email ? `/category/${_id}` : '/login'} ><button className="btn btn-warning">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleToyCard;