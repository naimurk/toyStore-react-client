import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import SingleMyPosted from './SingleMyPosted';


const MyPost = () => {
    const { user } = useContext(AuthContex)
    const [posted, setPosted] = useState([])
    const [control, setControl] = useState(false);
    // console.log(user?.email);
    useEffect(() => {
        fetch(`http://localhost:5000/myPosted/${user?.email}`)
            .then(res => res.json())
            .then(data => setPosted(data))
    }, [user, control])

    const handleUpDate = (data) => {
        fetch(`http://localhost:5000/updateJob/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.modifiedCount > 0) {
                setControl(!control);
              }
              console.log(result);
            });
    }

    const handleDelete = (id) => {
        // console.log(id);
        const proceed = confirm('are you sure')
        if(proceed){
            fetch (`http://localhost:5000/deleted/${id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    const remaing = posted.filter(post => post._id !== id)
                    setPosted(remaing)
                }
            })
        }
    }


    return (
        <div className='mb-11'>
            <h1 className='text-6xl py-24 text-center font-semibold'>My posted Everything</h1>
            {/* <div className='search-box'>
                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            </div> */}
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Toy name</th>
                        <th>category</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>seller email</th>
                        <th>Details</th>
                        <th>edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        posted && posted.map(singleMyPosted => <SingleMyPosted
                            key={singleMyPosted._id}
                            singleMyPosted={singleMyPosted}
                            handleUpDate = {handleUpDate}
                            handleDelete = {handleDelete}
                        >

                        </SingleMyPosted>)
                    }

                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>

                        <th>Toy name</th>
                        <th>category</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>seller email</th>
                        <th>Details</th>
                        <th>edit</th>
                        <th>Action</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default MyPost;