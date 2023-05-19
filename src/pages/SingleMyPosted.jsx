import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContex } from '../AuthProvider/AuthProvider';

const SingleMyPosted = ({ singleMyPosted, handleUpDate, handleDelete }) => {
  const {user} = useContext(AuthContex)
  // console.log(singleMyPosted);
  const { toyname, title, photo, price, email, name, quantity, category, rating, _id } = singleMyPosted;

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const toyname = form.toyname.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const title = form.title.value;
    const _id = form.id.value


    const formData = {
      toyname, price, quantity, photo, title, _id
    }

    handleUpDate(formData)









  }






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
        <Link to={ user?.email ? `/posted/${_id}` : '/login' }><button className="btn btn-ghost btn-xs">details</button></Link>

      </th>
      <th>
        {/* modal */}
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn btn-warning">edit</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form onSubmit={handleSubmit} >

              <div className='grid grid-cols-1 gap-7 lg:grid-cols-2'>
                <input type="text" defaultValue={toyname} placeholder='toy name' name="toyname" className="input input-bordered input-warning w-full max-w-xs" />
                <input type="text" defaultValue={_id} placeholder='id' name="id" className="  hidden input input-bordered input-warning w-full max-w-xs" />
                <input type="text" defaultValue={price} placeholder='price' name="price" className="input input-bordered input-warning w-full max-w-xs" />
                <input type="text" defaultValue={quantity} placeholder='quantity' name="quantity" className="input input-bordered input-warning w-full max-w-xs" />
                <input type="text" defaultValue={title} placeholder='title' name="title" className="input input-bordered input-warning w-full max-w-xs" />
                <input type="text" defaultValue={photo} placeholder='photo' name="photo" className="input input-bordered input-warning w-full max-w-xs" />
              </div>

              <input type="submit" className='btn btn-block btn-warning' value="update post" />
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">X</label>
            </div>
          </div>
        </div>

        {/* end modal */}
      </th>
      <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>

    </tr>
  );
};

export default SingleMyPosted;