import React, { useEffect, useState } from 'react';
import Collage from './Collage';

const CollageCard = () => {
    
    const [collges, setCollages] = useState([])
    // console.log(collges)

    useEffect(()=>{
        fetch('https://endgame-project-server.vercel.app/collages')
        .then(res => res.json())
        .then( data => setCollages(data))
    },[])

    return (
        <div>
            <div className='mx-auto text-center mb-5'>
            <h2 className='mt-20 text-4xl mb-1 font-bold '>Most Popular Collage</h2>
            <hr />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    collges.map(collage => <Collage collage={collage} key={collage.college_id} ></Collage> )
                }
            </div>
        </div>
    );
};

export default CollageCard;