import React from 'react';

const SinglePostedToy = ({singlePostedToy}) => {
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default SinglePostedToy;