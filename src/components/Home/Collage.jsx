import {Link} from "react-router-dom"
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Collage = ({ collage }) => {
    // console.log(collage)
    const { college_id, college_image, college_name, admission_process, } = collage;
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000"
            className='border-2 border-stone-700 rounded-md '>
            <div data-aos="zoom-in">
                <img className='h-48 w-full' src={college_image} alt="" />
            </div>
            <div className='p-2  h-32 '>
                <h2 data-aos="fade-down"
                    data-aos-duration="3000" ><span>Collage Name: </span> {college_name}</h2>
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <p className='text-xs text-slate-400'><span>Addmition Process: </span>{admission_process}</p>
                </div>

            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='relative'>
               <Link to={`${college_id}`}> <button className="btn btn-sm btn-outline btn-success absolute bottom-0 right-0 mr-2 mb-2">Details</button></Link>
            </div>
            

        </div>
    );
};

export default Collage;