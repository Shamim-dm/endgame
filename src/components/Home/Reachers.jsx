import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Reachers = ({ev}) => {
    const {project_description,  project_image, project_title    } = ev;
    return (
        <div data-aos="fade-up" className='border-2 rounded-md'>
            <img className='h-32 w-full rounded-md'  src={project_image} alt="" />
            <div className='p-2'>
            <h2><span>Project Name: </span>{project_title}</h2>
            <p><span>Description: </span>{project_description}</p>
            </div>
        </div>
    );
};

export default Reachers;