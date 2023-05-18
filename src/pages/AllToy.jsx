import React from 'react';
import  { useState,useEffect } from 'react';
const AllToy = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(()=> {
      fetch('http://localhost:5000/postedToy')
      .then(res=> res.json())
      .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllToy;