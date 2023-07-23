// import React, { useEffect, useState } from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import Events from './Events';
import Sports from './Sports';
import Reachers from './Reachers';

const CollageDetails = () => {
    const details =  useParams()
    const detailss = useLoaderData()
    // console.log(details, detailss)
    const data = detailss?.find(pd => pd.college_id == details.id )
    console.log(data)

    const { college_id, college_image, college_name, admission_process, } = data;

    // const [collges, setCollages] = useState([])
    // const [data, setData] = useState([])
    // console.log(data)


// const fillter = collges?.filter(data => data?.college_id == details.id);
// // console.log(fillter)
// for ( const collge of fillter ){
//     setData(collge)
// //  console.log(collge)
// }



    // useEffect(()=>{
    //     fetch('/fakeData.json')
    //     .then(res => res.json())
    //     .then( data => setCollages(data))
    // },[])
    return (
        <div className=' w-10/12 md:w-8/12 mx-auto'>
           <div>
            <img className='w-full' src={college_image} alt="" />
           </div>
           <div>
            <h2><span>College Name:</span>{college_name}</h2>
            <p><span>Addmition Process: </span>{admission_process}</p>

           </div>

           <div className='mt-8'>
            <h2 className='text-center text-4xl font-bold'>Research works</h2>
        
            <div className='grid md:grid-cols-2 gap-10 text-sm text-gray-300'>
                {
                  data?.research_works.map(ev => <Reachers ev={ev}></Reachers> )    
                }
            </div>
           </div>

           <div className='mt-8'>
            <h2 className='text-center text-4xl font-bold'>Events</h2>
           
           <div className='grid md:grid-cols-2 gap-10 text-sm text-gray-300'>
           {
                data?.events.map(ev => <Events ev={ev} ></Events> )
                    
            }
           </div>
           </div>

           <div className='mt-8'>
            <h2 className='text-center text-4xl font-bold'><span>Sports:</span></h2>
           
            <div className='grid md:grid-cols-2 gap-10 text-sm text-gray-300'>
                {                  
                    data?.sports.map(ev => <Sports ev={ev}></Sports> )                                       
                }
            </div>
           </div>

         
        </div>
    );
};

export default CollageDetails;