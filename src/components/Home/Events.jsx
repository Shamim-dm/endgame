import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Events = ({ev}) => {
    const {event_name, event_date, event_description, event_image,    } = ev;
    // console.log(ev)
    return (
        <div data-aos="fade-up"  className='border-2 rounded-md'>
            <img className='h-32 w-full rounded-md' src={event_image} alt="" />
            <h2><span>Event Name: </span>{event_name}</h2>
           <div className='p-2'>
           <p><span>Event Data: </span>{event_date}</p>
            <p><span>Event Description: </span>{event_description}</p>
           </div>
        </div>
    );
};

export default Events;