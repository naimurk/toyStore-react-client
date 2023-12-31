import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContex } from '../AuthProvider/AuthProvider';

const SinglePostedToy = ({singlePostedToy}) => {
    const {user} = useContext(AuthContex)
    // console.log(singlePostedToy);
    const {toyname,title, photo, price, email, name, quantity , category, rating , _id} = singlePostedToy
    return (
        <tr>
        <th>
          <p>{toyname}</p>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{category}</div>
              
            </div>
          </div>
        </td>
        <td>
          
          <span className="badge badge-ghost badge-sm">{price} $</span>
        </td>
        <td>{quantity ? quantity : 'quantity not found'}</td>
        <td>{email}</td>
        <th>
           <Link  to = { user?.email ? `/posted/${_id}`: '/login' }><button className="btn btn-ghost btn-xs">details</button></Link>
           
        </th>
      </tr>
    );
};

export default SinglePostedToy;