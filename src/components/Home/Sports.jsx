import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Sports = ({ev}) => {
    const {sport_name,team_logo,team_name, achievements } = ev;
    return (
        <div data-aos="fade-up" className='border-2 rounded-md'>
            <img className='h-32 w-full rounded-md' src={team_logo} alt="" />
            <h2><span>Sports Name: </span>{sport_name}</h2>
            <div className='p-2'>
            <p><span>Team Name:</span>{team_name}</p>
            <p><span>Achievements: </span> {achievements}</p>
            </div>
        </div>
    );
};

export default Sports;