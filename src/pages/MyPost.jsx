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
        fetch(`https://toy-new-server-naimurk.vercel.app/myPosted/${user?.email}`)
            .then(res => res.json())
            .then(data => setPosted(data))
    }, [user, control])
    
    const handleAscending = () => {
        fetch(`https://toy-new-server-naimurk.vercel.app/ascendingPrice/${user?.email}`)
            .then(res => res.json())
            .then(data => setPosted(data))
    } 

    const handleDescending = () => {
        fetch(`https://toy-new-server-naimurk.vercel.app/descendingPrice/${user?.email}`)
            .then(res => res.json())
            .then(data => setPosted(data))
    } 

    const handleUpDate = (data) => {
        fetch(`https://toy-new-server-naimurk.vercel.app/updateJob/${data._id}`, {
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
            fetch (`https://toy-new-server-naimurk.vercel.app/deleted/${id}`, {
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
            <div className='flex pb-10 justify-center gap-x-6'>
                 <button onClick={handleAscending} className='btn' > price Low to high</button>
                 <button onClick={handleDescending} className='btn' > price high to low</button>
            </div>
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
                        posted && posted?.map(singleMyPosted => <SingleMyPosted
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