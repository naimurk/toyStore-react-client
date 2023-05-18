import React, { useState,useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleToyCard from './SingleToyCard';

const Categroy = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activetab , setActiveTab] = useState('Marvel')
    const [toy, setToy] = useState([])
    
    useEffect(()=> {
        fetch(`http://localhost:5000/toys/${activetab}`)
        .then(res => res.json())
        .then(data =>setToy(data))
    },[activetab])

    const handleTab = (tabname) => {
        setActiveTab(tabname)
    }
    // console.log(activetab);
    return (
        <div>
        <h1 className='text-7xl font-semibold pb-28 text-center'>Category</h1>
  
        <Tabs selectedIndex={activeTabIndex} onSelect={index => setActiveTabIndex(index)}>
          <TabList>
            <Tab onClick={()=> handleTab('Marvel')} >Marvel</Tab>
            <Tab  onClick={()=> handleTab('Avengers')} >Avengers</Tab>
            <Tab  onClick={()=> handleTab('Transformers')} >Transformers</Tab>
          </TabList>
  
          <TabPanel >
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
                toy && toy.map(singleToy => <SingleToyCard
                key={singleToy._id}
                singleToy = {singleToy}
                ></SingleToyCard>)
            }
           </div>
          </TabPanel>
          <TabPanel >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
                toy && toy.map(singleToy => <SingleToyCard
                key={singleToy._id}
                singleToy = {singleToy}
                ></SingleToyCard>)
            }
           </div>
          </TabPanel>
          <TabPanel >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
                toy && toy.map(singleToy => <SingleToyCard
                key={singleToy._id}
                singleToy = {singleToy}
                ></SingleToyCard>)
            }
           </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Categroy;