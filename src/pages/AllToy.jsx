import React from 'react';
import { useState, useEffect } from 'react';
import SinglePostedToy from './SinglePostedToy';
const AllToy = () => {
    const [allToys, setAllToys] = useState([]);
    const [searchText , setSearchText] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/postedToy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    
    const handleSearch = () => {
       
        fetch(`http://localhost:5000/getJobsByText/${searchText}`)
        .then(res => res.json())
        .then(data => setAllToys(data))
        
    }

    console.log(searchText);
    return (
        <div className='mb-11'>
            <h1 className='text-6xl py-24 text-center font-semibold'>All Posted Action Figures</h1>
            <div className='flex justify-center pb-11 gap-x-3'>
                <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                <button onClick={handleSearch} className='btn btn-warning'>serach here</button>
            </div>
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
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        allToys && allToys.map(singlePostedToy => <SinglePostedToy
                            key={singlePostedToy._id}
                            singlePostedToy={singlePostedToy}
                        ></SinglePostedToy>)
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
                    </tr>
                </tfoot>

            </table>
        </div>
    );

};

export default AllToy;