import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './navber.css'
const Navbar = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"COLLAGES"},
        {name:"ADMITIONS"},
        {name:"MY COLLAGE"},
      

      ];
      let [open, setOpen] =useState(false);
    return (
        <div className='fixed w-[100%] z-20 '>
        <div className='shadow-md w-full relative '>
         <div className='md:flex items-center justify-between bg-slate-900 py-3 md:px-10 px-7'>
          {/* logo section */}
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
              {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
              <img className='w-7 h-7 rounded-full' src="https://media.tenor.com/fmM4QaupL4wAAAAC/earth-png.gif" alt="" />
              <span className='text-red-500'>Academic<span className='text-sky-500'>Landia</span></span>
          </div>
          {/* Menu icon */}
          <div onClick={()=>setOpen(!open)} className='absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7'>
              {
                  open ? <XMarkIcon className='text-white'/> : <Bars3BottomRightIcon className='text-white' />
              }
          </div>
          {/* linke items */}
          <ul className={`md:flex md:items-center gap-3 md:pb-0 pb-12 absolute md:static bg-slate-900 md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
              {
                  Links.map((link) => (
                  <li className='md:ml-4 md:my-0 my-4 font-semibold'>
                      <a href={link.link} className='text-white navsection-btn btn-nav text-sm hover:text-blue-400 duration-500'>{link.name}</a>
                  </li>)) 
              }
                      
                  <button className="btn btn-sm btn-outline btn-success"><a href="#">Login</a></button>
             
          </ul>
          
         </div>
      </div>
    </div>
    );
};

export default Navbar;